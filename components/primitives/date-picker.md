# Date Picker

Canonical Figma path: `Primitive Components / Date Picker`
Status: TODO verify — code DatePicker directory exists but is empty; needs MCP verification

---

## Types

| Type | Description |
|---|---|
| Single date | Pick one date |
| Range | Pick a start and end date |
| Month | Pick a month |
| Year | Pick a year |
| Date picker dropdown | Calendar popover attached to an input |

---

## Quick range presets (if applicable)

- Today
- This week
- This month
- Last 30 days
- Custom range

---

## Rules

- Do not build a custom calendar grid from raw HTML/CSS
- Use input field as trigger — do not use a standalone calendar without an associated field
- Range selection must visually highlight the range between start and end dates
- Quick presets should populate the range inputs when selected

---

## AI instruction

Instantiate from `Primitive Components / Date Picker` in the Figma library. If unavailable:
```
Missing canonical component: Date Picker
```
