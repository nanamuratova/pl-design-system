# Tabs

Canonical Figma path: `Primitive Components / Tabs`
Status: TODO verify exact variant names via MCP

---

## Styles

| Style | Use case |
|---|---|
| Underline | Page-level tabs, section switchers |
| Filled | Contained tabs inside cards or panels |
| Pill | Compact toggle-style tabs |
| Minimal | Low-emphasis tab strip |

---

## States

| State | Description |
|---|---|
| Active | Currently selected tab |
| Hover | Cursor over inactive tab |
| Disabled | Non-interactive tab |

---

## Rules

- Active tab is visually distinguished — do not add additional treatment (borders, shadows, badges) on top
- Use Underline for page-level section navigation
- Use Filled or Pill for tabs inside cards or compact containers
- Do not use tabs for binary toggles — use Switch & Toggle instead
- Do not compose custom tab UI from divs + click handlers

---

## AI instruction

Instantiate from `Primitive Components / Tabs` in the Figma library. If unavailable:
```
Missing canonical component: Tabs
```
