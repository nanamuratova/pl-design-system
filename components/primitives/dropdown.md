# Dropdown

Canonical Figma path: `Primitive Components / Dropdown`
Status: TODO verify exact variant names via MCP

---

## Types

| Type | Description |
|---|---|
| Select | Standard single-select dropdown |
| Multi-select | Select multiple options |
| Searchable select | Select with search filter input |
| Avatar select | Options include user avatars |
| Country select | Options include country flag + name |
| Payment select | Options include payment method icon |

---

## Menu item states

| State | Description |
|---|---|
| Default | Normal, unselected |
| Hover | Cursor over item |
| Selected | Currently selected item |
| Disabled | Non-interactive item |
| Separator | Visual divider between item groups |

---

## Rules

- Do not use a native `<select>` element — use the canonical Dropdown component
- Avatar dropdown: avatar rendering inside options must use the canonical Avatar component
- Country dropdown: flag + country name must use canonical rendering
- Searchable variant must include the search input at the top of the dropdown panel
- Disabled items must be visually distinguished and non-clickable

---

## AI instruction

Instantiate from `Primitive Components / Dropdown` in the Figma library. If unavailable:
```
Missing canonical component: Dropdown
```
