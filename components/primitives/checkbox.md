# Checkbox

Canonical Figma path: `Primitive Components / Checkbox`
Status: TODO verify exact variant names via MCP

---

## States

| State | Visual |
|---|---|
| Unchecked | Empty box |
| Checked | Box with checkmark |
| Indeterminate | Box with dash (partial selection) |
| Hover | Highlighted border |
| Focus | Focus ring visible |
| Disabled | Reduced opacity, not interactive |

---

## Shape variants

- **Square** — standard rectangular checkbox (TODO: verify if rounded variant exists in Figma)

---

## Rules

- Do not draw a custom checkbox with CSS (`:before`/`:after` tricks)
- Indeterminate state must use the canonical component — do not approximate with a dash glyph
- Always pair checkbox with a visible label (use Checkbox Label component for rich content rows)
- Disabled state must prevent interaction — do not rely on CSS `pointer-events` alone

---

## Accessibility

- Keyboard: Space to toggle, Tab to navigate
- Screen reader: must have associated label or `aria-label`
- Focus ring must be visible (do not suppress `outline`)

---

## AI instruction

Instantiate from `Primitive Components / Checkbox` in the Figma library. If unavailable:
```
Missing canonical component: Checkbox
```
