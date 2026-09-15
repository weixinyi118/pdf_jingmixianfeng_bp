# Research and chart protocol

Use external research to strengthen decisions, not to decorate the BP with unsupported market-size claims.

## Source ladder

Prefer, in order:

1. official statistics, laws, regulators, ministries, standards, and audited filings;
2. original company reports, investor relations, product documentation, and first-party datasets;
3. peer-reviewed research and reputable universities;
4. established industry associations and transparent research firms;
5. reputable journalism for recent events or context.

Search snippets, AI summaries, reposts, SEO pages, and unattributed charts are discovery aids only—not evidence.

For time-sensitive facts, search the current period and record publication date and access date. When definitions differ, do not combine the numbers into one series.

## Research ledger

For each external claim or chart series, record:

```markdown
### C01 — <claim or chart title>
- Status: external research / estimate / user-supplied
- Exact claim supported:
- Metric definition and unit:
- Geography / population / sample:
- Time period:
- Publisher and document title:
- Publication date:
- URL:
- Accessed:
- Page/table/section:
- Transformation: none / inflation adjustment / CAGR / normalization / calculation
- Caveat:
```

Every calculated metric must show its formula and source inputs. Preserve raw units before normalization.

## Chart choice

| Relationship | Default chart |
|---|---|
| Trend over time | line; use bars for few discrete periods |
| Category magnitude | sorted horizontal bars |
| Composition | stacked bars; avoid pie unless 2–4 parts and part-to-whole is the only question |
| Before/after or two-point change | slope chart or paired bars |
| Two-variable positioning | scatter plot with explained axes |
| Unit economics | waterfall or compact income bridge |
| Funnel / conversion | horizontal stage path with counts and rates |
| Roadmap | milestone timeline, not a fake exponential curve |
| Qualitative comparison | table or 2×2 only when axes are defensible |

Use one chart per page unless two views answer one tightly coupled question. Prefer direct labels; avoid legends when labels fit. Use ink for context, oxide red for the focal series, teal for the comparison or positive second layer, brass for forecast/model, and gray for baselines.

## Required chart anatomy

- Conclusion title, not a topic label.
- Unit and time period.
- Sample/geography/definition where relevant.
- Clear distinction between actual, forecast, estimate, and target.
- Source line immediately below the chart, short enough to read; full URLs live in the research ledger.
- A short interpretation that says why the chart changes the project decision.

## Data integrity

- Do not infer a market size by multiplying unrelated percentages.
- Do not quote a CAGR without its base/end years and underlying source.
- Do not compare nominal currency across years without labeling it.
- Do not turn survey intent into paid demand.
- Do not imply causality from correlation.
- Do not present a model as actual performance.
- If sources conflict, show the range or explain the definition difference.
- If reliable quantitative evidence is absent, replace the chart with a sourced qualitative comparison, a test plan, or an explicitly labeled scenario model.

## Inline SVG styling

Charts should be authored as inline SVG so text remains sharp. The background stays transparent over the bone page; use no white container, shadow, gradient, 3D effect, or more than three semantic colors. Axis and grid lines use ink/gray hairlines; chart type uses the same font stacks as the document. Keep labels at 8.5 pt or larger in print.
