# HTML authoring contract

Copy `assets/theme.css` beside the generated HTML and link it with `<link rel="stylesheet" href="theme.css">`. Copy `assets/fonts/` as well when bundled webfonts are present.

The body contains only `.page` elements. Each `.page` prints as one A4 sheet.

## Interior page shell

```html
<section class="page">
  <header class="index-header">
    <div class="index-left">
      <b class="section-no">02</b>
      <span class="section-en">SOLUTION</span>
      <span class="section-cn">解决方案：一个 IP 中枢、两层叙事、三类产品</span>
    </div>
    <b class="folio">08</b>
  </header>
  <main class="page-content">
    <h1>结论型的两行宋体标题，<br>第二行继续完成判断</h1>
    <!-- content -->
  </main>
</section>
```

## Core components

- `.index-header`, `.section-no`, `.section-en`, `.section-cn`, `.folio` — fixed editorial index.
- `.editorial-title` or `h1` — 20 pt light serif title.
- `.lead` — 10.8 pt opening paragraph.
- `.metrics` with `.metric` — unboxed large-number row.
- `.ledger-table` — fill-free ruled table.
- `.judgment` — red light-serif judgment with vertical rule.
- `.numbered-points` — brass/red mono numbers with edited statements.
- `.dark-band`, `.teal-band`, `.axis-nodes` — rare two-layer structure.
- `.status-note` — small inline state label, never a pill.
- `figure`, `figcaption`, `.source` — evidence/chart and source.
- `.bottom-note` — faint source note above a bottom rule.
- `.closing` — final page motif.

## Rules

- Full-page background is bone; never override it to white.
- Use light serif for main titles. Do not use bold sans headings.
- Do not use cards, rounded rectangles, shadows, boxed callouts, filled table headers, or zebra rows.
- Ordinary tables have no outer vertical border. Use horizontal rules and column alignment.
- Keep every heading with the next paragraph or object.
- Do not absolutely position ordinary content. Only cover photography, running furniture, and closing motifs may use absolute positioning.
- Every `.page-content` must fit. Overflow is a defect, not a reason to shrink below the design system.
- Download permitted evidence images locally. No remote images, iframes, or webfonts in the final render.
- Charts and diagrams are editable HTML/CSS or inline SVG with `viewBox`; labels remain sharp.
- Do not leave Markdown, placeholders, tool tokens, internal notes, or raw URLs in visible body copy.

## Examples

### Unboxed metrics

```html
<div class="metrics cols-4">
  <div class="metric"><strong>7</strong><em>次</em><span>田野调研</span></div>
  <div class="metric"><strong>2</strong><em>万字+</em><span>口述史等文字资料</span></div>
  <div class="metric"><strong>10</strong><em>小时+</em><span>音视频资料</span></div>
  <div class="metric"><strong>4</strong><em>项</em><span>核心合作 / 授权文件</span></div>
</div>
```

### Ruled table

```html
<table class="ledger-table">
  <thead><tr><th>层级</th><th>角色</th><th>职责</th></tr></thead>
  <tbody>
    <tr><td>01 执行层</td><td>学生核心团队</td><td>日常开发、内容生产与活动交付</td></tr>
    <tr><td>02 指导层</td><td>跨学科教师</td><td>阶段评审、文化审核与方法支持</td></tr>
  </tbody>
</table>
```

### Judgment

```html
<div class="judgment">
  <strong>阶段判断：项目处于创意计划阶段。</strong>
  <p>内容与合作基础建设已完成，下一阶段用真实付费和复访验证模型。</p>
</div>
```

### Rare two-layer structure

```html
<div class="dark-band"><b><i>01</i> 文化正典层</b><small>CANON</small><p>必须有来源、文化审核与明确授权。</p></div>
<div class="axis-nodes"><span>来源标注</span><span>传承人审核</span><span>明确授权</span><span>匿名化</span><span>可撤回</span></div>
<div class="teal-band"><b><i>02</i> 平行共创层</b><small>CO-CREATION</small><p>经同意、匿名化和改编后进入青年共创。</p></div>
```

Use `scripts/render-pdf.cjs input.html output.pdf`, then render and inspect every PDF page.
