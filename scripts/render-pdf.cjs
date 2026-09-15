#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

async function main() {
  const [inputArg, outputArg] = process.argv.slice(2);
  if (!inputArg || !outputArg) {
    throw new Error('Usage: render-pdf.cjs <input.html> <output.pdf>');
  }

  const input = path.resolve(inputArg);
  const output = path.resolve(outputArg);
  if (!fs.existsSync(input)) throw new Error(`Input HTML not found: ${input}`);
  const html = fs.readFileSync(input, 'utf8');
  if (!html.includes('class="page') && !html.includes("class='page")) {
    throw new Error('Input must contain at least one .page element');
  }
  fs.mkdirSync(path.dirname(output), { recursive: true });

  const browserCandidates = [
    process.env.QUIET_BP_CHROME,
    chromium.executablePath(),
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].filter(Boolean);
  const executablePath = browserCandidates.find((candidate) => fs.existsSync(candidate));
  if (!executablePath) {
    throw new Error('No Chromium-based browser found. Set QUIET_BP_CHROME to a Chrome/Edge executable.');
  }
  const browser = await chromium.launch({
    headless: true,
    executablePath,
  });
  try {
    const page = await browser.newPage({ viewport: { width: 1120, height: 1584 }, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(input).href, { waitUntil: 'load' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      const images = Array.from(document.images);
      await Promise.all(images.map((img) => img.complete ? Promise.resolve() : new Promise((resolve, reject) => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', () => reject(new Error(`Image failed: ${img.src}`)), { once: true });
      })));
      const pages = Array.from(document.querySelectorAll('.page'));
      if (!pages.length) throw new Error('No .page elements found');
      const overflow = pages.map((el, index) => ({
        page: index + 1,
        overflowX: el.scrollWidth - el.clientWidth,
        overflowY: el.scrollHeight - el.clientHeight,
      })).filter((x) => x.overflowX > 1 || x.overflowY > 1);
      if (overflow.length) throw new Error(`Page overflow: ${JSON.stringify(overflow)}`);
    });
    await page.pdf({
      path: output,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
  } finally {
    await browser.close();
  }
  const stat = fs.statSync(output);
  if (stat.size < 10_000) throw new Error(`Rendered PDF is unexpectedly small: ${stat.size} bytes`);
  process.stdout.write(JSON.stringify({ input, output, bytes: stat.size }) + '\n');
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exit(1);
});
