# Badges & Tags

Canonical Figma path: `Primitive Components / Badges & Tags`
Status: TODO verify exact variant names via MCP

---

## Styles

| Style | Description |
|---|---|
| Filled | Solid background with contrasting text |
| Outline | Border only, transparent background |
| Soft | Low-opacity background tint, softer presence |

---

## Semantic types (colors)

| Type | Use for |
|---|---|
| Neutral | General metadata, categories, non-signal tags |
| Brand | Protocol Labs branded content |
| Success | Positive status: active, verified, published |
| Warning | Caution status: pending, review needed |
| Error | Problem status: failed, rejected, overdue |

---

## Dot variant

Some badge variants include a leading dot indicator. Use when color alone may be insufficient to convey status (e.g., accessibility contexts).

---

## Usage

- Use **Soft** style for general metadata tags (skills, topics, focus areas) — lowest visual weight
- Use **Filled** for important status indicators that need to stand out
- Use **Outline** for labels that need to be distinguishable but not dominant
- Use semantic colors correctly — do not use `Success` green for decorative purposes

---

## Rules

- Do not overload a card with more than 3–4 badges
- Do not draw a custom badge with raw `div` + CSS
- Do not use badges as navigation elements
- Badges are read-only indicators — they are not interactive buttons
- Keep badge text concise (1–3 words)

---

## AI instruction

Instantiate from `Primitive Components / Badges & Tags` in the Figma library. If unavailable:
```
Missing canonical component: Badges & Tags
```
