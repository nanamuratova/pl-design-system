# Empty States

Canonical Figma path: `Primitive Components / Empty`
Status: TODO verify exact variant names via MCP

---

## Types

| Type | Use when |
|---|---|
| No data | Page or section has no content yet |
| No results | Search or filter returned zero results |
| Error | Something went wrong loading content |
| 404 | Page not found |
| Access restricted | User does not have permission |

---

## Anatomy

- Illustration or icon
- Headline (short, direct)
- Body text (optional, explains the situation)
- CTA button (optional, when user action can resolve it)

---

## Rules

- Always use Empty state for zero-data scenarios — do not leave blank white space
- CTA in empty state must use the canonical Button component
- Error variant is distinct from No Data — do not use one for the other
- Do not build a custom empty state from scratch (icon + h3 + p + button)

---

## AI instruction

Instantiate from `Primitive Components / Empty` in the Figma library. If unavailable:
```
Missing canonical component: Empty
```
