# Component Catalog

Full inventory of all canonical components in the PL Network / LabOS Design System.

Canonical Figma file: [Design-System-Full | Protocol Labs](https://www.figma.com/design/0fFjyzEincRez6m3D80vLg/Design-System-Full-%7C-Protocol-Labs?node-id=802-20272&m=dev)

---

## Primitive Components

| Component | Figma Path | Category | Purpose | Spec | Status |
|---|---|---|---|---|---|
| Button | `Primitive Components / Button` | Primitive | Primary action trigger | [buttons.md](primitives/buttons.md) | ✅ Verified |
| Link Button | `Primitive Components / Link Button` | Primitive | Text link styled as button | [buttons.md](primitives/buttons.md) | TODO verify |
| Icon Button | `Primitive Components / Icon Button` | Primitive | Icon-only action trigger | [buttons.md](primitives/buttons.md) | TODO verify |
| Round Icon Button | `Primitive Components / Round Icon Button` | Primitive | Circular icon action button | [buttons.md](primitives/buttons.md) | TODO verify |
| Input | `Primitive Components / Input` | Primitive | Single-line text entry | [inputs.md](primitives/inputs.md) | TODO verify |
| TextArea | `Primitive Components / TextArea` | Primitive | Multi-line text entry | [textarea.md](primitives/textarea.md) | TODO verify |
| Checkbox | `Primitive Components / Checkbox` | Primitive | Binary selection control | [checkbox.md](primitives/checkbox.md) | TODO verify |
| Checkbox Label | `Primitive Components / Checkbox Label` | Primitive | Selectable row with rich content | [checkbox-label.md](primitives/checkbox-label.md) | TODO verify |
| Checkbox Group | `Primitive Components / Checkbox Group` | Primitive | Grouped multi-select checkboxes | [checkbox-group.md](primitives/checkbox-group.md) | TODO verify |
| Alerts & Notification | `Primitive Components / Alerts & Notification` | Primitive | System feedback messages | [alerts-notifications.md](primitives/alerts-notifications.md) | TODO verify |
| Badges & Tags | `Primitive Components / Badges & Tags` | Primitive | Status indicators, category labels | [badges-tags.md](primitives/badges-tags.md) | TODO verify |
| Date Picker | `Primitive Components / Date Picker` | Primitive | Date and range selection | [date-picker.md](primitives/date-picker.md) | TODO verify |
| Accordion | `Primitive Components / Accordion` | Primitive | Collapsible content sections | [accordion.md](primitives/accordion.md) | TODO verify |
| Dropdown | `Primitive Components / Dropdown` | Primitive | Select and multi-select | [dropdown.md](primitives/dropdown.md) | TODO verify |
| Empty | `Primitive Components / Empty` | Primitive | Zero-state placeholder | [empty-states.md](primitives/empty-states.md) | TODO verify |
| Pagination | `Primitive Components / Pagination` | Primitive | Page navigation | [pagination.md](primitives/pagination.md) | TODO verify |
| Progress | `Primitive Components / Progress` | Primitive | Completion/loading indicator | [progress.md](primitives/progress.md) | TODO verify |
| Regular Search Input | `Primitive Components / Regular Search Input` | Primitive | Search field | [search.md](primitives/search.md) | TODO verify |
| Slider / Range | `Primitive Components / Slider` | Primitive | Continuous value selector | [slider.md](primitives/slider.md) | TODO verify |
| Steps | `Primitive Components / Steps` | Primitive | Multi-step progress indicator | — | TODO verify |
| Carousel | `Primitive Components / Carousel` | Primitive | Horizontal scroll content | [carousel.md](primitives/carousel.md) | TODO verify |
| Switch & Toggle | `Primitive Components / Switch & Toggle` | Primitive | Binary on/off control | [toggle.md](primitives/toggle.md) | TODO verify |
| Table (cells) | `Primitive Components / Table` | Primitive | Data table cell types | [table-cells.md](primitives/table-cells.md) | TODO verify |
| Tabs | `Primitive Components / Tabs` | Primitive | View/section switcher | [tabs.md](primitives/tabs.md) | TODO verify |
| Tooltips | `Primitive Components / Tooltips` | Primitive | Contextual helper text | [tooltips.md](primitives/tooltips.md) | TODO verify |
| Upload | `Primitive Components / Upload` | Primitive | File selection/upload | [file-upload.md](primitives/file-upload.md) | TODO verify |
| Context Menu | `Primitive Components / Context Menu` | Primitive | Right-click contextual actions | [context-menu.md](primitives/context-menu.md) | TODO verify |
| Drawer | `Primitive Components / Drawer` | Primitive | Slide-in panel overlay | — | TODO verify |

---

## Product Components

| Component | Figma Path | Category | Purpose | Spec | Status |
|---|---|---|---|---|---|
| Header & Nav | `Product Components / Header & Nav` | Product | Primary application navigation | [header-navigation.md](product/header-navigation.md) | TODO verify |
| Sidebars & Bottom Sheets | `Product Components / Sidebars & Bottom Sheets` | Product | Filter panels + mobile drawers | [sidebars-drawers.md](product/sidebars-drawers.md) | TODO verify |
| Cards | `Product Components / Cards` | Product | Content preview cards | [cards.md](product/cards.md) | TODO verify |
| Forum Cards | `Product Components / Forum Cards` | Product | Forum post preview cards | [forum-cards.md](product/forum-cards.md) | TODO verify |
| Updates Cards | `Product Components / Updates Cards` | Product | Update/announcement cards | [updates-cards.md](product/updates-cards.md) | TODO verify |
| Deals Cards | `Product Components / Deals Cards` | Product | Investment deal cards | [deals-cards.md](product/deals-cards.md) | TODO verify |
| Demo Day Cards | `Product Components / Demo Day Cards` | Product | Demo Day event cards | [demo-day-cards.md](product/demo-day-cards.md) | TODO verify |
| Jobs Cards | `Product Components / Jobs Cards` | Product | Job listing cards | [jobs-cards.md](product/jobs-cards.md) | TODO verify |
| Founder Guides Cards | `Product Components / Founder Guides Cards` | Product | Founder guide article cards | [founder-guides.md](product/founder-guides.md) | TODO verify |
| Office Hours Cards | `Product Components / Office Hours Cards` | Product | Office hours session cards | — | TODO verify |
| Comments | `Product Components / Comments` | Product | Comment composer and threads | [comments.md](product/comments.md) | TODO verify |
| Bottom Navigation | `Product Components / Bottom Navigation` | Product | Mobile bottom nav bar | [bottom-navigation.md](product/bottom-navigation.md) | TODO verify |
| Tables | `Product Components / Tables` | Product | Domain-specific data tables | [tables.md](product/tables.md) | TODO verify |

---

## Patterns

| Pattern | Type | Purpose | Spec |
|---|---|---|---|
| Stack / Vertical Flow | Layout | Linear vertical arrangement | [layout-patterns.md](../patterns/layout-patterns.md) |
| Grid | Layout | Multi-column card/content grid | [layout-patterns.md](../patterns/layout-patterns.md) |
| Sidebar | Layout | Fixed side panel + main content | [layout-patterns.md](../patterns/layout-patterns.md) |
| Detail / Single Focus | Layout | Centered single-content view | [layout-patterns.md](../patterns/layout-patterns.md) |
| Sidebar + Grid | Composition | Filter sidebar + card grid | [layout-compositions.md](../patterns/layout-compositions.md) |
| Sidebar + List | Composition | Filter sidebar + list | [layout-compositions.md](../patterns/layout-compositions.md) |
| Centered Content | Composition | Centered narrow content column | [layout-compositions.md](../patterns/layout-compositions.md) |
| Full Width | Composition | Full-bleed content area | [layout-compositions.md](../patterns/layout-compositions.md) |
| Split Content | Composition | Two equal columns | [layout-compositions.md](../patterns/layout-compositions.md) |
| Modal | Overlay | Focused interruption overlay | [overlay-patterns.md](../patterns/overlay-patterns.md) |
| Drawer | Overlay | Slide-in side panel | [overlay-patterns.md](../patterns/overlay-patterns.md) |
| Bottom Sheet | Overlay | Mobile bottom slide-up panel | [overlay-patterns.md](../patterns/overlay-patterns.md) |
