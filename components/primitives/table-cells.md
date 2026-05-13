# Table Cells

Canonical Figma path: `Primitive Components / Table`
Status: TODO verify exact variant names via MCP

---

## Cell types

| Cell type | Content | Use for |
|---|---|---|
| Avatar cell | Avatar + name (+ optional subtitle) | Member name, author, assignee |
| Badge cell | One or more Badge/Tag components | Status, category, type |
| Progress cell | Progress bar + percentage | Completion %, funding % |
| Country cell | Flag icon + country name | Location, nationality |
| Rating cell | Star rating or numeric score | Reviews, ratings |
| Action cell | Icon Button(s) or context menu trigger | Row-level actions |
| Analytics cell | Numeric value + trend indicator | Metrics, stats |

---

## Rules

- Use the correct cell type for the data — do not use a plain text cell when an Avatar or Badge cell exists
- Action cells use canonical Icon Button and/or Context Menu — not raw HTML buttons
- Do not build custom table cells with raw HTML

---

## AI instruction

Instantiate from `Primitive Components / Table` in the Figma library. If unavailable:
```
Missing canonical component: Table
```
