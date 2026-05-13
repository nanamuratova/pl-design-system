# Carousel

Canonical Figma path: `Primitive Components / Carousel`
Status: TODO verify exact variant names via MCP

---

## Indicator variants

| Variant | Description |
|---|---|
| Dots | Small circular dots below carousel |
| Lines | Thin horizontal line indicators |

---

## Navigation

- Left/right arrow buttons
- Swipe (mobile)
- Auto-play (if configured)

---

## States

- Active indicator (current slide)
- Inactive indicator (other slides)

---

## Rules

- Do not build a custom carousel with raw `overflow: hidden` + JS scroll
- Indicators must use canonical dot or line treatment
- Navigation arrows must use canonical Icon Button component
- Auto-play must include pause-on-hover and a visible stop control

---

## AI instruction

Instantiate from `Primitive Components / Carousel` in the Figma library. If unavailable:
```
Missing canonical component: Carousel
```
