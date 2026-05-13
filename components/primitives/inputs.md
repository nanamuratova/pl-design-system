# Inputs

Canonical Figma path: `Primitive Components / Input`
Status: TODO verify exact variant names via MCP

---

## Input types

- **Text input** — standard single-line text field
- **Search input** — with magnifying glass icon and clear button
- **Password input** — with show/hide toggle
- **Tag input** — allows adding multiple tags/tokens inline
- **Avatar input** — with avatar prefix (user lookup, assignee fields)

---

## Styles

- **Default** — standard bordered input
- **Underline** — bottom border only, no full box border
- **Filled** — filled background, no border

---

## States

| State | Description |
|---|---|
| Default | No interaction, empty |
| Hover | Cursor over input |
| Focus | Active keyboard focus |
| Error | Validation failure, error border + helper text |
| Disabled | Non-interactive, reduced opacity |
| Filled | Input has content |

---

## Anatomy

- Label (above)
- Input container
- Leading icon or prefix (optional)
- Trailing icon or suffix (optional)
- Helper/error text (below)
- Character count (optional, trailing)

---

## Rules

- Always include a visible label (not placeholder-only)
- Error state must show both error border and error helper text below
- Placeholder text is supplementary — never the primary label
- Do not build a custom input with a `div` + CSS border
- Do not hardcode border-radius, color, or typography — use tokens

---

## AI instruction

Instantiate from `Primitive Components / Input` in the Figma library. Select the correct style, type, and state. Do not recreate. If unavailable:
```
Missing canonical component: Input
```
