# quiet-avant-garde-bp

一套面向中文及中英双语 BP、政府合作方案、赛事计划书与项目报告的 Codex Skill。

它负责把用户提供的内容忠实整理为克制、成熟的 A4 竖版 PDF，重点处理视觉层级、信息提炼、表格与图表转译、字体、留白和印刷级排版；不会擅自补写商业模式、融资叙事或原稿中不存在的结论。

## 视觉特征

- 暖骨白纸张底色
- 轻宋体标题与无衬线正文
- 细线、档案编号和少量氧化红 / 黄铜色强调
- 无卡片、无圆角、无企业咨询模板感
- A4 竖版，兼顾打印与手机 PDF 阅读

## 安装

将仓库克隆到 Codex Skills 目录：

```powershell
git clone https://github.com/weixinyi118/pdf_jingmixianfeng_bp.git "$env:USERPROFILE\.codex\skills\quiet-avant-garde-bp"
```

重新打开 Codex 后，可在提示词中调用：

```text
使用 $quiet-avant-garde-bp，把这份内容忠实排版成成熟的 A4 PDF，不扩写原文。
```

## 仓库结构

- `SKILL.md`：核心工作流与内容边界
- `references/`：设计系统、HTML 规范、研究与图表规范
- `assets/`：视觉参考、主题样式与本地字体
- `scripts/render-pdf.cjs`：确定性 HTML → PDF 渲染脚本
- `agents/openai.yaml`：Skill 展示信息与默认提示词

## 使用原则

原始文档是内容事实来源，保留的参考 PDF 是视觉事实来源。任何无法追溯到用户原文或明确外部来源的实质性表述，都不应被加入最终交付物。
