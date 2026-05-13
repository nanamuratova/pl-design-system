# Tooltips

Canonical Figma path: `Primitive Components / Tooltips`
Status: TODO verify exact variant names via MCP

---

## Placement variants

- Top
- Bottom
- Left
- Right

---

## Usage

- Use to explain icon-only buttons and controls
- Use for truncated text labels where full text needs to be accessible
- Use to provide brief supplemental context (not critical information)

---

## Rules

- Keep tooltip copy short: under 80 characters
- Do not use tooltips for critical information — always provide an accessible alternative
- Tooltips must appear on keyboard focus, not only on hover
- Do not use tooltips as the only way to discover a feature

---

## Accessibility

- Triggered on `:hover` and `:focus`
- Must be associated with the trigger via `aria-describedby`
- Must not be the sole mechanism for conveying important information

---

## AI instruction

Instantiate from `Primitive Components / Tooltips` in the Figma library. If unavailable:
```
Missing canonical component: Tooltips
```
