# Slider / Range

Canonical Figma path: `Primitive Components / Slider`
Status: TODO verify exact variant names via MCP

---

## Types

| Type | Description |
|---|---|
| Basic Slider | Single handle, single value |
| Double / Range Slider | Two handles defining a min–max range |

---

## Display options

- With/without tooltip showing current value on handle
- With/without histogram/graph background (showing distribution)

---

## Usage

- Use for price range filters (Deals, Jobs)
- Use for numeric range inputs (year founded, team size)
- Tooltip value must appear on drag

---

## Rules

- Do not build a custom slider with raw `<input type="range">` + CSS
- Range slider (double handle) must prevent handles from crossing
- Do not replace the slider with two number inputs — use the canonical component

---

## AI instruction

Instantiate from `Primitive Components / Slider` in the Figma library. If unavailable:
```
Missing canonical component: Slider
```
