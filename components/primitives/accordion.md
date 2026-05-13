# Accordion

Canonical Figma path: `Primitive Components / Accordion`
Status: TODO verify exact variant names via MCP

---

## States

| State | Description |
|---|---|
| Collapsed | Content hidden, header visible with expand indicator |
| Expanded | Content visible, collapse indicator |
| Hover | Highlighted header |
| Focus | Focus ring on header |
| Disabled | Non-interactive, reduced opacity |

---

## Themes

- **Light** — default, for light backgrounds
- **Dark** — for dark panels or sidebars

---

## Rules

- Use for FAQ sections, settings panels, and collapsible filter groups
- Expand indicator (caret/chevron) must rotate on state change — use canonical animation
- Do not build a custom accordion from divs + CSS `max-height` transitions
- Multiple accordions can be open simultaneously (unless spec requires single-open)

---

## AI instruction

Instantiate from `Primitive Components / Accordion` in the Figma library. If unavailable:
```
Missing canonical component: Accordion
```
