# Figma Source Map

Canonical Figma file: **Design-System-Full | Protocol Labs**
File URL: https://www.figma.com/design/0fFjyzEincRez6m3D80vLg/Design-System-Full-%7C-Protocol-Labs

Inspection method: Figma MCP Dev Mode (`get_metadata`, `get_design_context`)

---

## Foundations

These are already correctly implemented. Do not regenerate.

### Colors / Color Variables / Tokens
Figma page: Foundations
Status: Verified — implemented in `tokens/colors.scss`

### Typography
Figma page: Foundations
Status: Verified — implemented in `tokens/typography.scss` and `tokens/_typography-mixins.scss`

### Effects (Shadows, Radii)
Figma page: Foundations
Status: Verified — implemented in `tokens/spacing.scss`

---

## Primitive Components

---

## Component: Button

Figma page: Primitive Components
Canonical path: `Primitive Components / Button`
Figma node: `802:20272` (verified via MCP)

Related components:
- Link Button
- Icon Button
- Round Icon Button

Variants (confirmed via MCP inspection):
- **Type**: Default (Brand), Success, Warning, Error, Neutral, Ghost/Light
- **Style**: Fill, Border, Light
- **Size**: Tiny (24px h), Extra Small (32px h), Small (36px h), Medium (40px h), Large (48px h), Extra Large (56px h), Big (58px h)
- **State**: Normal, Hover, Focus, Active, Disable

Status: **Verified** (MCP inspection confirmed full variant matrix)
Notes: Do not recreate manually. Always instantiate from Figma library.

---

## Component: Link Button

Figma page: Primitive Components
Canonical path: `Primitive Components / Link Button`
Variants: TODO: verify exact Figma component path
Status: TODO verify

---

## Component: Icon Button

Figma page: Primitive Components
Canonical path: `Primitive Components / Icon Button`
Variants: TODO: verify exact Figma component path
Status: TODO verify

---

## Component: Round Icon Button

Figma page: Primitive Components
Canonical path: `Primitive Components / Round Icon Button`
Variants: TODO: verify exact Figma component path
Status: TODO verify

---

## Component: Input

Figma page: Primitive Components
Canonical path: `Primitive Components / Input`
Variants:
- Style: Default, Underline, Filled
- Type: Text, Search, Password, Tag, Avatar
- State: Default, Hover, Focus, Error, Disabled, Filled
Status: TODO verify exact variant names via MCP

---

## Component: TextArea

Figma page: Primitive Components
Canonical path: `Primitive Components / TextArea`
Variants:
- Standard
- Rich text / comment field
- With toolbar
Status: TODO verify exact variant names via MCP

---

## Component: Checkbox

Figma page: Primitive Components
Canonical path: `Primitive Components / Checkbox`
Variants:
- State: Unchecked, Checked, Indeterminate
- Interaction: Default, Hover, Focus, Disabled
Status: TODO verify exact variant names via MCP

---

## Component: Checkbox Label

Figma page: Primitive Components
Canonical path: `Primitive Components / Checkbox Label`
Variants:
- Content: Simple text, Icon, Avatar, Image, Pricing
- State: Default, Selected, Disabled
Status: TODO verify exact variant names via MCP

---

## Component: Checkbox Group

Figma page: Primitive Components
Canonical path: `Primitive Components / Checkbox Group`
Status: TODO verify exact variant names via MCP

---

## Component: Alerts & Notification

Figma page: Primitive Components
Canonical path: `Primitive Components / Alerts & Notification`
Variants:
- Type: Info, Success, Warning, Error, Neutral
- Style: Alert, Banner, Toast, Notification Card
Status: TODO verify exact variant names via MCP

---

## Component: Badges & Tags

Figma page: Primitive Components
Canonical path: `Primitive Components / Badges & Tags`
Variants:
- Style: Filled, Outline, Soft
- Semantic: Neutral, Brand, Success, Warning, Error
- With/without dot
Status: TODO verify exact variant names via MCP

---

## Component: Date Picker

Figma page: Primitive Components
Canonical path: `Primitive Components / Date Picker`
Status: TODO verify — DatePicker directory exists in code repo but is empty

---

## Component: Accordion

Figma page: Primitive Components
Canonical path: `Primitive Components / Accordion`
Variants:
- State: Collapsed, Expanded
- Theme: Light, Dark
Status: TODO verify exact variant names via MCP

---

## Component: Dropdown

Figma page: Primitive Components
Canonical path: `Primitive Components / Dropdown`
Variants:
- Type: Select, Multi-select, Searchable, Avatar, Country, Payment
- Item states: Default, Hover, Selected, Disabled
Status: TODO verify exact variant names via MCP

---

## Component: Empty

Figma page: Primitive Components
Canonical path: `Primitive Components / Empty`
Variants:
- Type: No data, No results, Error, 404, Access restricted
Status: TODO verify exact variant names via MCP

---

## Component: Pagination

Figma page: Primitive Components
Canonical path: `Primitive Components / Pagination`
Variants:
- Style: Numeric, Prev/Next, Compact, Go-to, Mobile
Status: TODO verify exact variant names via MCP

---

## Component: Progress

Figma page: Primitive Components
Canonical path: `Primitive Components / Progress`
Variants:
- Type: Bar, Circle
- State: Active, Complete, Disabled
Status: TODO verify exact variant names via MCP

---

## Component: Regular Search Input

Figma page: Primitive Components
Canonical path: `Primitive Components / Regular Search Input`
Variants:
- Context: Global search, Sidebar search, With filters
Status: TODO verify exact variant names via MCP

---

## Component: Slider / Range

Figma page: Primitive Components
Canonical path: `Primitive Components / Slider`
Variants:
- Type: Single, Range/Double
- With/without tooltip, histogram
Status: TODO verify exact variant names via MCP

---

## Component: Steps

Figma page: Primitive Components
Canonical path: `Primitive Components / Steps`
Status: TODO verify exact variant names via MCP

---

## Component: Carousel

Figma page: Primitive Components
Canonical path: `Primitive Components / Carousel`
Variants:
- Indicator: Dots, Lines
- State: Active, Inactive
Status: TODO verify exact variant names via MCP

---

## Component: Switch & Toggle

Figma page: Primitive Components
Canonical path: `Primitive Components / Switch & Toggle`
Variants:
- Type: Switch, Toggle with label, Segmented (light/dark)
- State: Active, Inactive, Disabled
Status: TODO verify exact variant names via MCP

---

## Component: Table

Figma page: Primitive Components
Canonical path: `Primitive Components / Table`
Variants:
- Cell types: Avatar, Badge, Progress, Country, Rating, Action, Analytics
Status: TODO verify exact variant names via MCP

---

## Component: Tabs

Figma page: Primitive Components
Canonical path: `Primitive Components / Tabs`
Variants:
- Style: Underline, Filled, Pill, Minimal
- State: Active, Hover, Disabled
Status: TODO verify exact variant names via MCP

---

## Component: Tooltips

Figma page: Primitive Components
Canonical path: `Primitive Components / Tooltips`
Variants:
- Placement: Top, Bottom, Left, Right
Status: TODO verify exact variant names via MCP

---

## Component: Upload

Figma page: Primitive Components
Canonical path: `Primitive Components / Upload`
Variants:
- Type: Drag & drop, Compact, Image upload
- State: Default, Uploading, Complete, Failed
Status: TODO verify exact variant names via MCP

---

## Component: Context Menu

Figma page: Primitive Components
Canonical path: `Primitive Components / Context Menu`
Variants:
- With/without separator, nested, destructive
Status: TODO verify exact variant names via MCP

---

## Component: Drawer

Figma page: Primitive Components
Canonical path: `Primitive Components / Drawer`
Variants:
- Position: Left, Right, Bottom
Status: TODO verify exact variant names via MCP

---

## Product / Composite Components

---

## Component: Header & Nav

Figma page: Product Components
Canonical path: `Product Components / Header & Nav`
Variants:
- Platform: Desktop, Mobile
- With/without search, notification bell, avatar menu
Status: TODO verify exact variant names via MCP

---

## Component: Sidebars & Bottom Sheets

Figma page: Product Components
Canonical path: `Product Components / Sidebars & Bottom Sheets`
Variants:
- Context: Directory filter, Demo Day filter, Deals filter, Job Board filter, Founder Guides
- Platform: Desktop sidebar, Mobile bottom sheet
Status: TODO verify exact variant names via MCP

---

## Component: Cards

Figma page: Product Components
Canonical path: `Product Components / Cards`
Sub-components:
- Focus Area Cards
- Homepage Cards
- Updates Cards
- Directory Member Cards
- Team Cards
- Forum Cards
- Deals Cards
- Demo Day Cards
- Job Board Cards
- Founder Guides Cards
- Office Hours Cards
- Topic Cards
- Comment Cards
Status: TODO verify exact variant names via MCP

---

## Component: Forum Cards

Figma page: Product Components
Canonical path: `Product Components / Forum Cards`
Status: TODO verify exact variant names via MCP

---

## Component: Updates Cards

Figma page: Product Components
Canonical path: `Product Components / Updates Cards`
Status: TODO verify exact variant names via MCP

---

## Component: Deals Cards

Figma page: Product Components
Canonical path: `Product Components / Deals Cards`
Status: TODO verify exact variant names via MCP

---

## Component: Demo Day Cards

Figma page: Product Components
Canonical path: `Product Components / Demo Day Cards`
Status: TODO verify exact variant names via MCP

---

## Component: Jobs Cards

Figma page: Product Components
Canonical path: `Product Components / Jobs Cards`
Status: TODO verify exact variant names via MCP

---

## Component: Founder Guides Cards

Figma page: Product Components
Canonical path: `Product Components / Founder Guides Cards`
Status: TODO verify exact variant names via MCP

---

## Component: Office Hours Cards

Figma page: Product Components
Canonical path: `Product Components / Office Hours Cards`
Status: TODO verify exact variant names via MCP

---

## Component: Comments

Figma page: Product Components
Canonical path: `Product Components / Comments`
Status: TODO verify exact variant names via MCP

---

## Component: Bottom Navigation

Figma page: Product Components
Canonical path: `Product Components / Bottom Navigation`
Tabs: Directory, Events, Demo Day, More
Status: TODO verify exact variant names via MCP

---

## Layout Patterns

Figma page: Layout Patterns / Page Templates
Patterns:
- Stack / Vertical Flow
- Grid
- Sidebar
- Detail / Single Focus
- Sidebar + Grid
- Sidebar + List
- Centered Content
- Full Width
- Split Content
- Modal overlay
- Drawer overlay
- Bottom Sheet overlay
Status: TODO verify exact page names via MCP
