# File Upload

Canonical Figma path: `Primitive Components / Upload`
Status: TODO verify exact variant names via MCP

---

## Types

| Type | Description |
|---|---|
| Drag & Drop area | Large zone for drag-and-drop file input |
| Compact upload | Small inline trigger button |
| Image upload | Specialized for image files with preview |

---

## States

| State | Description |
|---|---|
| Default | Empty, awaiting input |
| Drag over | File is being dragged over the zone |
| Uploading | File upload in progress (with progress indicator) |
| Complete | Upload successful |
| Failed | Upload error with error message |

---

## Rules

- Drag & Drop zone must visually respond to drag-over state
- Uploading state must show a canonical Progress component — do not use a custom spinner
- Failed state must show an actionable error message
- Do not build a custom upload zone from raw `<input type="file">` + CSS

---

## AI instruction

Instantiate from `Primitive Components / Upload` in the Figma library. If unavailable:
```
Missing canonical component: Upload
```
