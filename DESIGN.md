# PL Design System — Design Reference

> Extracted from Figma (Design System Foundations, Default Components, Design Components, Icons/Avatars)
> and from the implemented code in `tokens/`, `styles/`, `components/`, and `components/page/`.
>
> Lines marked **[INFER]** are intent inferred from code or visual patterns — not directly stated in Figma or documentation. Edit these sections to confirm or correct.

---

## What is canon

**This system is documented by `tokens/` and `components/`.** Those directories are the source of truth. Every color, spacing value, and component variant defined there is an intentional, reviewed design decision that should be treated as stable.

**The mockups in `components/page/` are example compositions, not system canon.** They demonstrate one valid way to assemble components into a page using realistic mock data. They are useful as a reference and a starting point, but:

- They may hardcode layout values (padding, grid column widths) that are not token-backed
- They may use components in ways that are illustrative rather than prescriptive
- They are not tested for every screen size or edge case
- They will drift from the real application over time

When `tokens/` or `components/` and a page mockup disagree, trust the token or component definition. When you want to understand how to compose a page, the mockups in `components/page/` are the faster reference, but verify against Figma before shipping.

---

## Table of Contents

1. [Brand & Voice](#1-brand--voice)
2. [Token Architecture](#2-token-architecture)
3. [Color System](#3-color-system)
4. [Typography System](#4-typography-system)
5. [Spacing & Layout Principles](#5-spacing--layout-principles)
6. [Component Inventory](#6-component-inventory)
7. [Page Composition Principles](#7-page-composition-principles)

---

## 1. Brand & Voice

### Visual personality

Protocol Labs builds foundational internet infrastructure — IPFS, Filecoin, libp2p. The design system reflects that mission: it is **precise, open, and trustworthy**. The visual language avoids decoration for its own sake. Every element earns its place through utility.

Key traits visible across Figma screens and the implemented components:

| Trait | Expression |
|---|---|
| **Clarity over flash** | White cards on a pale grey (`#f9fafb`) background; shadows are barely perceptible (`1px 2px, opacity 6–12%`) |
| **Brand blue as signal** | `#1b4dff` is used sparingly — it marks the active state, the primary action, the brand anchor. It is never decorative |
| **Density without crowding** | The directory pages (members, teams, deals) pack a lot of data. The system achieves this through consistent 16–20px gaps, 14px body text, and tight label sizes |
| **Technical credibility** | Inter typeface, negative letter-spacing, monospace font option for code contexts |
| **Neutral-first** | Most UI surfaces are white or near-white. Color enters only to convey meaning (status, brand, error, success) |

### Voice **[INFER]**

The product serves a vetted, technical, founder-adjacent audience. UI copy in the page templates is direct and functional: "Quick actions to get the most from your network", "A private space for vetted founders and operators." No marketing language inside the product.

- Write labels in title case for navigation, sentence case for descriptions
- Prefer nouns over verbs for section headings ("Contact Details" not "How to contact")
- Counts and stats are shown numerically, never spelled out ("396 Teams" not "three hundred ninety-six teams")

### What Protocol Labs is NOT

- Not playful or emoji-heavy (emoji appear only in notification streams as a functional signal type)
- Not dark-mode-first — the system is light-mode only as implemented [INFER: dark mode may be planned given transparent overlay tokens]
- Not a consumer product — skip gradients, illustrations, and decorative color blocks

---

## 2. Token Architecture

### The three-layer model

The token system follows a **three-layer architecture**, though layers 1 and 2 are currently collapsed into a single `:root` declaration:

```
Layer 1 — Primitive / Raw values
  Raw named values: #1b4dff, 'Inter', 1rem, 8px
  (Not directly used in components — these are the source)

Layer 2 — Semantic tokens  ← CURRENT IMPLEMENTATION
  CSS custom properties on :root, grouped by role:
  --background-brand-default
  --foreground-neutral-primary
  --border-neutral-muted
  --spacing-md
  --radius-lg

Layer 3 — Component tokens  ← [INFER: NOT YET IMPLEMENTED]
  Per-component variables like --button-bg, --badge-text-color
  Currently components read Layer 2 tokens directly
```

### Current state

All tokens are defined in `tokens/` and emitted to `:root` via three SCSS files:

| File | Tokens | Layer |
|---|---|---|
| `tokens/colors.scss` | 75 CSS custom properties | Semantic color |
| `tokens/typography.scss` | 6 CSS custom properties + SCSS mixins | Primitive font values + semantic text styles |
| `tokens/spacing.scss` | 39 CSS custom properties | Semantic spacing, radius, shadow, z-index, layout |

### Naming convention

Token names map Figma's slash-separated path to CSS kebab-case:

```
Figma path                    →  CSS custom property
background/brand/default      →  --background-brand-default
foreground/neutral/primary    →  --foreground-neutral-primary
corner radius/lg              →  --radius-lg
spacing/md                    →  --spacing-md
```

### Legacy aliases

`tokens/colors.scss` includes `--plaa-*` aliases for backward compatibility with `pln-directory-portal-v2`. These map old token names to new semantic tokens:

```scss
--plaa-primary-blue:        var(--foreground-brand-primary)
--plaa-text-dark:           var(--neutral-slate-900)
--plaa-surface-light-grey:  var(--neutral-slate-100)
```

**Do not use `--plaa-*` tokens in new components.** Use the semantic equivalents.

### Regenerating tokens

Tokens are auto-extracted from Figma. To update:
1. Open the target Figma file in Figma Desktop
2. Call `get_variable_defs` via the Figma MCP
3. Update the relevant `tokens/*.scss` file
4. Add a backward-compat alias if any token was renamed

---

## 3. Color System

### Semantic groups

The color system is organized into six semantic groups. Use the group that matches your intent, not whichever value looks right visually.

#### Background (`--background-*`)

Surfaces, containers, and page regions.

| Token | Value | Use |
|---|---|---|
| `--background-base-white` | `#ffffff` | Cards, panels, modals, inputs |
| `--background-brand-default` | `#1b4dff` | Brand-filled surfaces (rarely used at this scale) |
| `--background-brand-soft-surface` | `#f2f5ff` | Tinted brand backgrounds (selected states, callouts) |
| `--background-brand-light-hover` | `#e8edff` | Hover state on brand-light elements |
| `--background-neutral-soft-surface` | `#f9fafb` | **Page background** — the default canvas |
| `--background-neutral-subtle` | `#f0f3f9` | Slightly darker surface (table rows, inactive tabs) |
| `--background-neutral-normal` | `#2d3643` | Dark surfaces (tooltips, dark nav variants) |
| `--background-error-normal` | `#ff3838` | Error-filled surfaces |

#### Foreground (`--foreground-*`)

Text and icon colors.

| Token | Value | Use |
|---|---|---|
| `--foreground-brand-primary` | `#1b4dff` | Brand text, active nav items, links, brand icons |
| `--foreground-brand-secondary` | `#4174ff` | Secondary brand text, hover states |
| `--foreground-neutral-primary` | `#0a0c11` | **Default body text** — headlines, primary content |
| `--foreground-neutral-secondary` | `#455468` | **Supporting text** — descriptions, subtitles, meta |
| `--foreground-neutral-tertiary` | `#8897ae` | Placeholder text, disabled text, deemphasized labels |
| `--foreground-neutral-quaternary` | `#afbaca` | Faintest text — decorative separators, unused fields |
| `--foreground-light-primary` | `#ffffff` | Text on dark/brand backgrounds |
| `--foreground-error-secondary` | `#ff3838` | Error messages, destructive action labels |

**The foreground hierarchy in practice:**
- Headline / primary label → `--foreground-neutral-primary`
- Secondary description / hint → `--foreground-neutral-secondary`
- Placeholder / disabled → `--foreground-neutral-tertiary`
- Text on colored background → `--foreground-light-primary`

#### Border (`--border-*`)

Lines, outlines, dividers.

| Token | Value | Use |
|---|---|---|
| `--border-brand-subtle` | `#aebfff` | Selected/focused input rings, active card outlines |
| `--border-brand-xsubtle` | `#e8edff` | Hover borders on brand elements |
| `--border-neutral-subtle` | `#1b386021` (≈12% opacity) | **Default card/input border** |
| `--border-neutral-muted` | `#1b38603d` (≈24% opacity) | Stronger dividers, table lines |
| `--border-neutral-xsubtle` | `#1b38600f` (≈6% opacity) | Barely-there separators |

#### Action (`--action-*`)

Interactive element states. Use these specifically for buttons, links, form controls — not for static surfaces.

| Namespace | Purpose |
|---|---|
| `--action-bg-*` | Button backgrounds across normal/active/hover/light states |
| `--action-fg-*` | Button/link foreground text and icons |
| `--action-border-*` | Button/input borders, focus rings, error rings |

Key action tokens:
- `--action-bg-brand-normal` → `#1b4dff` — primary filled button
- `--action-bg-neutral-normal` → `#2d3643` — dark/neutral filled button
- `--action-fg-base-inv-white` → `#ffffff` — text on filled buttons
- `--action-border-neutral-light-focus` → ~24% opacity black — default input border
- `--action-border-error-focus` → `#ff3838` — error state ring

#### Transparent overlays (`--transparent-*`)

For scrim layers, hover overlays, and subtle tints without introducing a new named color.

| Token | Opacity | Use |
|---|---|---|
| `--transparent-dark-6` | 6% | Subtle hover overlay on white surfaces |
| `--transparent-dark-12` | 12% | Pressed state overlay |
| `--transparent-brand-4` | 4% | Very faint brand tint on hover |
| `--transparent-brand-16` | 16% | Active brand tint (selected rows, active items) |

#### Neutral Slate Palette (`--neutral-slate-*`)

Raw scale values for when you need a precise shade outside the semantic system. **Prefer semantic tokens.** Use slate only when no semantic token fits.

`100` (#f1f5f9) → `200` (#e2e8f0) → `300` (#cbd5e1) → `600` (#475569) → `900` (#0f172a)

### When NOT to use color

- Do not use color to convey the only signal (always pair with icon or text for accessibility)
- Do not use `--background-brand-default` as a page background
- Do not introduce new colors outside the token system — request a token addition instead

---

## 4. Typography System

### Typefaces

| Variable | Value | Use |
|---|---|---|
| `--font-family-primary` | Inter, system-ui fallbacks | All UI text |
| `--font-family-mono` | JetBrains Mono, Fira Code | Code, hashes, addresses, technical strings |

### The five categories

Typography is organized into five functional categories. Import mixins via `@use 'styles/mixins'` (which forwards `tokens/typography`).

#### 1. Heading — `@include mixins.heading-*`

For page titles, section titles, modal headings. Always Inter Medium. Negative letter-spacing for optical comfort at large sizes.

| Mixin | Size | Line-height | Letter-spacing | Weight |
|---|---|---|---|---|
| `heading-3xl` | 64px (4rem) | 78px | −2.3px | 500 |
| `heading-xl` | 40px (2.5rem) | — | −1.2px | 500 |
| `heading-md` | 32px (2rem) | 42px | −0.75px | 500 |
| `heading-sm` | 24px (1.5rem) | 34px | −0.4px | 500 |

Use `heading-3xl` for marketing/splash contexts [INFER: not used in any current page template].
Use `heading-md` for page titles (e.g., "Forum", "Deals").
Use `heading-sm` for card section titles.

#### 2. Body — `@include mixins.body-*`

Running text, descriptions, excerpts. Regular weight for readability; `-strong` variants at SemiBold (600) for emphasis within body copy.

| Mixin | Size | Line-height | Weight | Use |
|---|---|---|---|---|
| `body-xl-strong` | 20px | 27px | 600 | Lead paragraph, featured descriptions |
| `body-md` | 16px | 24px | 400 | **Default body text** |
| `body-sm` | 14px | 22px | 400 | Secondary descriptions, card excerpts |
| `body-sm-strong` | 14px | 22px | 600 | Emphasized supporting text |
| `body-xs` | 12px | 18px | 400 | Fine print, metadata |
| `body-xs-strong` | 12px | 18px | 600 | Emphasized micro text |

#### 3. Label — `@include mixins.label-*`

UI chrome: button labels, navigation links, form labels, tag text, column headers. Always Medium (500) weight — the defining characteristic that distinguishes labels from body text at the same size.

| Mixin | Size | Line-height | Use |
|---|---|---|
| `label-2xl` | 24px | 32px | Large standalone labels, card names |
| `label-xl` | 20px | 27px | Section heading alternatives |
| `label-lg` | 18px | 24px | Subheading labels |
| `label-md` | 16px | 24px | **Default label** — nav items, button text at md |
| `label-sm` | 14px | 20px | Badge text, small button labels, form labels |
| `label-xs` | 12px | 16px | Chip labels, tight metadata labels |
| `label-2xs` | 10px | 14px | Micro labels, notification badges |

#### 4. Caption — `@include mixins.caption-*`

Short auxiliary text adjacent to an element. Unlike body-xs, captions have no letter-spacing (tracking 0), making them feel more "attached" to their context.

| Mixin | Size | Line-height | Letter-spacing | Use |
|---|---|---|---|---|
| `caption-md` | 12px | 14px | 0 | Timestamps, status labels, tooltips, image captions |

#### 5. Display / Underline **[INFER]**

A `display` category (hero sizes above 64px) and `underline` category (for hyperlink-style inline text) are referenced in the Figma Foundations file but are not yet extracted into `tokens/typography.scss`. These should be added when marketing or editorial pages are built.

### Choosing the right style

```
Is this a title or section header?         → heading-*
Is this running readable text?             → body-*
Is this a UI label (button, nav, badge)?   → label-*
Is this very short auxiliary metadata?     → caption-md
Is the font family wrong for the context?  → use mono only for technical strings
```

### Letter-spacing principle

All text uses subtle negative tracking (`−0.013rem` to `−0.144rem`). This is intentional — it tightens Inter at all sizes for a more polished, product-grade feel. Never override `letter-spacing` to `0` on headings or labels.

---

## 5. Spacing & Layout Principles

### Spacing scale

The scale follows a near-4px base with descriptive size names. All values are `rem`-based.

| Token | rem | px | Use |
|---|---|---|---|
| `--spacing-zero` | 0 | 0 | Explicit zero (prefer over `0` literal) |
| `--spacing-5xs` | 0.125 | 2 | Hairline gaps, offset nudges |
| `--spacing-4xs` | 0.25 | 4 | Icon-to-text gap, inline element spacing |
| `--spacing-3xs` | 0.375 | 6 | Dense chip/badge padding |
| `--spacing-2xs` | 0.5 | 8 | **8px — base unit** · tight list items, icon buttons |
| `--spacing-xs` | 0.625 | 10 | Medium-tight padding |
| `--spacing-sm` | 0.75 | 12 | Standard inline gap |
| `--spacing-md` | 1 | 16 | **16px — standard gap** · most padding, most gaps |
| `--spacing-lg` | 1.25 | 20 | Generous inline padding |
| `--spacing-xl` | 1.5 | 24 | Section-level gap, card padding |
| `--spacing-2xl` | 2 | 32 | Between-section gap |
| `--spacing-3xl` | 2.5 | 40 | Page-level vertical rhythm |
| `--spacing-4xl` | 3 | 48 | Large section breaks |
| `--spacing-6xl` | 4.5 | 72 | Hero-level vertical space |
| `--spacing-7xl` | 5 | 80 | NavBar height, full-bleed header zones |

**Base rhythm:** Work in multiples of `--spacing-2xs` (8px). The most common values in component SCSS are `8px`, `12px`, `16px`, `20px`, `24px`.

### Border radius

| Token | Value | Use |
|---|---|---|
| `--radius-zero` | 0px | Sharp-cornered table cells, dividers |
| `--radius-xsm` | 4px | Small chips, tiny badges |
| `--radius-sm` | 6px | Secondary badges, compact inputs |
| `--radius-md` | 8px | **Standard** · inputs, small cards, buttons |
| `--radius-lg` | 10px | Cards, panels, dropdowns |
| `--radius-xl` | 12px | Modal dialogs, drawer panels |
| `--radius-2xl` | 16px | Large cards, feature callouts |
| `--radius-3xl` | 20px | Full-featured cards |
| `--radius-full` | 9999px | Pills, avatar circles, circular buttons |

### Shadows

| Token | Use |
|---|---|
| `--shadow-xs` | Barely-there card lift |
| `--shadow-sm` | Standard card depth |
| `--shadow-xl` | Modal/lightbox floating |
| `--shadow-button` | Button pressed/raised feel |
| `--shadow-down-1` | Sticky header underline |
| `--shadow-dropdown` | Dropdown/popover floating |

### Breakpoints

Mobile-first. Use `@include media.*` from `styles/media.scss`:

| Mixin | Min-width | Typical use |
|---|---|---|
| `mobile` | 375px | Minimum supported viewport |
| `tablet` | 768px | Two-column layouts begin |
| `tablet-landscape` | 1024px | Full sidebar patterns |
| `desktop` | 1280px | Max content width constraints |
| `desktop-wide` | 1440px | Full-bleed page templates |

Max-width helpers: `mobile-only` (<768px), `tablet-only` (768–1023px).

### Layout constants

| Token | Value | Use |
|---|---|---|
| `--app-header-height` | 56px | NavBar height — offset sticky content |
| `--plaa-sidebar-width` | 215px | Left navigation sidebar |

### Content column

Page templates use a ~900px content column centered within the 1440px max-width container, achieved via `padding: 0 270px` at desktop-wide. For pages without sidebars (Team Profile, Forum), content is center-aligned. For pages with sidebars (Deals, Member Profile), a two-column CSS Grid is used.

---

## 6. Component Inventory

### Primitives & Forms

---

#### Button

**Purpose:** The primary call-to-action element. Triggers an immediate action or submits data.

**Variants (`variant` × `styleType`):**

| variant | fill | border | light |
|---|---|---|---|
| `primary` | Blue filled (default CTA) | Blue outline | Blue tinted bg |
| `secondary` | — | — | — |
| `warning` | Amber filled | Amber outline | — |
| `error` | Red filled | Red outline | — |
| `success` | Green filled | — | — |
| `neutral` | Dark grey filled | Grey outline | Grey tinted |

**Sizes:** `tiny` · `xs` · `sm` · `md` (default) · `lg` · `xl` · `big`

**States:** default, hover, active (`:active`), disabled (`disabled` + `aria-disabled`), loading (shows spinner, disables interaction)

**Props:** `leftIcon`, `rightIcon`, `fullWidth`, `loading`

**Accessibility:** Inherits `<button>` semantics. `aria-disabled` is set alongside `disabled` so screen readers announce state correctly even when the element cannot receive focus.

**Anti-patterns:**
- Do not use `variant="primary" styleType="fill"` for destructive actions — use `variant="error"`
- Do not use a Button when a plain `<a>` link is semantically correct
- Do not stack two `primary-fill` buttons side by side — one should be `border` or `light`

---

#### Badge

**Purpose:** A small inline label communicating category, status, count, or membership. Not interactive.

**Variants (`color` × `styleType`):**

| color | light | outline | fill |
|---|---|---|---|
| `blue` | Brand blue tint | Blue outline | Blue filled |
| `gray` | Grey tint | Grey outline | Grey filled |
| `green` | Green tint | Green outline | Green filled |
| `yellow` | Amber tint | Amber outline | Amber filled |
| `red` | Red tint | Red outline | Red filled |

**Sizes:** `sm` · `md` (default) · `lg`

**Props:** `leftIcon`, `rightIcon`, `brandLogo`, `dot` (adds a colored dot indicator)

**States:** default, `disabled` (reduces opacity)

**Accessibility:** Rendered as `<span>`. If a badge conveys meaningful state (e.g., "Unread 3"), wrap in an `aria-label` on the parent or use `role="status"`.

**Anti-patterns:**
- Do not use Badge for interactive filters — use a button with Badge styling, or use Tabs/Dropdown
- Do not use more than 4–5 badges in a single row without a "+N more" overflow pattern

---

#### Input

**Purpose:** Single-line text entry. Wraps `<input>` with label, hint, and error state management.

**Sizes:** `sm` · `md` (default) · `lg`

**Props:** `label`, `hint`, `error`, `leftIcon`, `rightIcon`, `fullWidth`

**States:** default, focused (brand outline), error (`data-error`, red outline, `aria-invalid`, error message below), disabled

**Accessibility:** Label is linked via `htmlFor`/`id`. Error message uses `role="alert"` and is linked via `aria-describedby`. `aria-invalid` is set on the `<input>` when in error state.

**Anti-patterns:**
- Do not omit the `label` prop — if you must hide it visually, provide `aria-label` instead
- Do not place error and hint text simultaneously (error takes precedence)

---

#### Textarea

**Purpose:** Multi-line text entry. Same API as Input with `rows` support.

Follows identical states and accessibility patterns as Input.

---

#### Checkbox

**Purpose:** Binary on/off selection for a single item or within a list.

Built on Radix UI `@radix-ui/react-checkbox`. Prop: `checked`, `onCheckedChange`, `size` (`sm` | `md`).

**States:** unchecked, checked, indeterminate, disabled (all variants)

**Accessibility:** Managed by Radix — keyboard navigable, `aria-checked` maintained automatically.

**Anti-patterns:**
- Do not use Checkbox for a mutually exclusive choice — use a radio group
- Do not use as a toggle for an immediate action — use Switch

---

#### Switch

**Purpose:** Toggles a setting on/off with immediate effect (no "submit" required).

Built on Radix UI `@radix-ui/react-switch`.

**States:** off, on, focused, disabled

**Accessibility:** `role="switch"`, `aria-checked`, keyboard-activatable with Space.

**Anti-patterns:**
- Do not use Switch in forms where the selection is saved on submit — use Checkbox
- Always pair with a visible label describing what is being toggled

---

#### SearchInput

**Purpose:** Dedicated search field with a clear button. Used for filtering lists in-place.

**Props:** `value`, `onChange`, `onClear`, `placeholder`, `fullWidth`

**States:** empty (shows search icon), populated (shows clear ×), focused

**Anti-patterns:**
- Do not use for form inputs — use Input instead
- Do not use without an `onClear` handler

---

#### Slider

**Purpose:** Range selection on a continuous scale.

Built on Radix UI `@radix-ui/react-slider`.

**Props:** `min`, `max`, `step`, `value`, `onValueChange`, `label`

**Accessibility:** `role="slider"`, `aria-valuemin/max/now`, keyboard-adjustable with arrow keys.

---

#### Progress

**Purpose:** Communicates completion of a background process. Read-only.

Built on Radix UI `@radix-ui/react-progress`.

**Props:** `value` (0–100), `max`, `size` (`sm` | `md` | `lg`), `variant` (`default` | `brand` | `success` | `error`)

**Anti-patterns:**
- Do not use for static data visualization — use a chart
- Do not animate indefinitely without `aria-label` explaining what is loading

---

#### Alert

**Purpose:** Inline contextual message communicating system feedback or important information.

**Variants:** `info` · `success` · `warning` · `error`
**Style types:** `light` · `filled` · `outline`

**Props:** `title`, `description`, `icon`, `action` (ReactNode for a CTA button), `closable`, `onClose`

**Accessibility:** Renders as `<div role="alert">` for error/warning. For info/success, consider `role="status"` if not urgent.

**Anti-patterns:**
- Do not use Alert for form field errors — use Input's `error` prop
- Do not use `filled` alerts inside cards (too much visual weight)

---

#### Tooltip

**Purpose:** Reveals supplemental information on hover/focus for an element that cannot be labeled otherwise.

Built on Radix UI `@radix-ui/react-tooltip`.

**Props:** `content`, `side` (`top` | `bottom` | `left` | `right`), `align`

**Accessibility:** Content is announced by screen readers via `role="tooltip"`. The trigger must be a focusable element.

**Anti-patterns:**
- Do not put interactive content (buttons, links) inside a Tooltip — use a Popover
- Do not use Tooltip as the only source of important information — it is invisible on touch devices

---

#### Dropdown

**Purpose:** A menu of actions or options triggered by a button.

Built on Radix UI `@radix-ui/react-dropdown-menu`.

**Sub-components:** `Dropdown`, `DropdownItem`, `DropdownLabel`, `DropdownSeparator`

**Props:** `trigger` (ReactNode), `align` (`start` | `center` | `end`), `side`

**Accessibility:** Full keyboard navigation (arrow keys, Enter, Escape). `role="menu"`, `role="menuitem"`.

**Anti-patterns:**
- Do not use Dropdown for navigation links — use NavBar or Sidebar
- Do not use as a form Select input — use a proper `<select>` or Radix Select

---

#### Accordion

**Purpose:** Progressive disclosure of content sections. Reduces visual complexity by hiding detail until requested.

Built on Radix UI `@radix-ui/react-accordion`.

**Sub-components:** `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`

**Props on Root:** supports both `single` and `multiple` types (Radix).

**Accessibility:** `role="region"`, trigger uses `aria-expanded` and `aria-controls`.

**Anti-patterns:**
- Do not use Accordion for content that users always need to see
- Do not nest Accordions more than one level deep

---

#### Tabs

**Purpose:** Divides related content into parallel panes, showing one at a time.

Built on Radix UI `@radix-ui/react-tabs`.

**Variants:** `line` (underline indicator) · `enclosed` (bordered tabs) · `pill` (rounded pill tabs)
**Sizes:** `sm` · `md` (default) · `lg`

**Props on Trigger:** `badge` (number or string shown as a count chip), `icon`

**Accessibility:** Full ARIA tab pattern — `role="tablist"`, `role="tab"`, `role="tabpanel"`. Keyboard: arrow keys navigate tabs, Enter/Space activates.

**Anti-patterns:**
- Do not use Tabs for navigation between pages — use NavBar or Sidebar
- Do not use more than 6–7 tabs; consider a Dropdown overflow pattern beyond that

---

#### Pagination

**Purpose:** Navigates through multi-page data sets.

**Variants:** `basic` · `with-text` · `compact` · `goto`
**Props:** `currentPage`, `totalPages`, `onPageChange`, `siblingCount`, `showFirstLast`

**Anti-patterns:**
- Do not use Pagination for infinite scroll — omit it and implement a "Load more" pattern
- Do not show Pagination when there is only one page

---

#### Table

**Purpose:** Displays structured data in rows and columns.

**Sub-components:** `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell`, `TableHeaderCell`

**Anti-patterns:**
- Do not use Table for layout — use CSS Grid or Flexbox
- Do not use Table on mobile without a responsive fallback (card view or horizontal scroll)

---

#### Steps

**Purpose:** Communicates progress through a multi-step process.

**Props:** `steps` (array of `{ id, label, description? }`), `currentStep`, `orientation` (`horizontal` | `vertical`)

**Anti-patterns:**
- Do not use Steps for progress that does not require user action at each step — use Progress

---

#### EmptyState

**Purpose:** Communicates the absence of data in a list or container.

**Props:** `title`, `description`, `action` (ReactNode), `icon`

**Anti-patterns:**
- Do not show EmptyState during loading — show a skeleton or Spinner instead

---

#### ContextMenu

**Purpose:** Reveals a contextual action menu on right-click (or long-press on touch).

Built on Radix UI `@radix-ui/react-context-menu`.

**Anti-patterns:**
- Do not use ContextMenu as the primary way to expose actions — always provide a visible affordance too

---

#### Drawer

**Purpose:** A slide-in panel from an edge of the viewport for secondary content, filters, or forms.

Built on Radix UI `@radix-ui/react-dialog` with slide-in positioning.

**Props:** `open`, `onClose`, `side` (`left` | `right` | `bottom`), `title`

**Accessibility:** `role="dialog"`, `aria-modal`, focus is trapped inside when open.

**Anti-patterns:**
- Do not use Drawer for primary navigation on desktop — use Sidebar
- Do not nest a Drawer inside another Drawer

---

#### Lightbox

**Purpose:** Full-screen media viewer for images or videos.

Built on Radix UI `@radix-ui/react-dialog`.

**Props:** `src`, `alt`, `open`, `onClose`

**Anti-patterns:**
- Do not use Lightbox for non-media content — use a Dialog/Modal

---

#### Upload

**Purpose:** File upload with drag-and-drop and file-type validation.

**Props:** `accept`, `maxSize`, `multiple`, `onUpload`, `onError`

**Anti-patterns:**
- Do not use for inline image fields where a simple `<input type="file">` suffices

---

#### DatePicker

**Purpose:** Calendar-based date input. **[INFER: stub only — not yet implemented]**

---

#### Carousel

**Purpose:** Horizontally scrollable sequence of cards with dot/arrow navigation.

**Props:** `items`, `autoPlay`, `loop`, `showDots`, `showArrows`

**Anti-patterns:**
- Do not use Carousel to hide content users need to compare — show items in a grid instead
- Do not use Carousel for more than 6–8 items

---

### Layout & Navigation

---

#### NavBar

**Purpose:** The persistent top navigation bar. Present on every page.

**Anatomy:** Logo mark → Nav links (Desktop) → Spacer → Action slot → Notification bell with count badge → Avatar button → Hamburger menu (Mobile)

**Props:** `logo`, `logoHref`, `items` (`{ label, href, active?, badge? }[]`), `notificationCount`, `avatar`, `userName`, `avatarFallback`, `onNotificationClick`, `onAvatarClick`, `onMenuClick`, `actions`

**Height:** 56px (`--app-header-height`)

**Responsive behavior:** Nav links are hidden on mobile; hamburger button appears to open a Sidebar or BottomNav.

**Accessibility:** `<header>` landmark. Each nav item is an `<a>`. Notification button has `aria-label="Notifications"`.

**Anti-patterns:**
- Do not render NavBar inside a page template that is itself inside a NavBar — it renders once at the layout level
- Do not add more than 5–6 items to `items` on desktop — overflow goes in a "More" dropdown

---

#### Sidebar

**Purpose:** A mobile-only slide-in navigation drawer. On desktop, navigation uses the NavBar + inline tabs.

**Props:** `open`, `onClose`, `sections` (`{ title?, items }[]`), `header`, `footer`, `side` (`left` | `right`)

**Item structure:** `{ id, label, href?, icon?, badge?, active?, children? }`

**Accessibility:** `<nav aria-label="Navigation">`. An overlay scrim (`aria-hidden`) blocks the page behind it. Closing restores focus.

**Anti-patterns:**
- Do not use Sidebar as a persistent on-screen element on desktop — it is modal by design

---

#### BottomNav

**Purpose:** Mobile bottom navigation bar. Fixed to the viewport bottom on small screens.

**Props:** `items` (`{ id, label, href, icon, active? }[]`), `activeId`

**Anti-patterns:**
- Do not show BottomNav on desktop — hide via CSS `@include media.tablet-landscape`
- Do not use more than 5 items

---

#### PageHeader

**Purpose:** A full-width page-level banner with a colored background, page title, and optional breadcrumb/subtitle/action area.

**Anti-patterns:**
- Do not use PageHeader for card-level headings — use a plain `<h2>` with `heading-sm`

---

### Design / Application Cards

---

#### MemberCard

**Purpose:** Represents a single PL network member in a directory grid or list.

**Props:** `avatar`, `name`, `role`, `company`, `location`, `availability` (`available` | `booked` | `unavailable`), `tags`, `href`, `compact`

**States:** default, hover (shadow lifts), availability dot color changes by status

**Anti-patterns:**
- Do not use MemberCard inside a narrow column — it needs ≥280px minimum width

---

#### FocusAreaCard

**Purpose:** Represents one of Protocol Labs' focus areas with team/project counts and member avatar stack.

**Props:** `title`, `description`, `teamCount`, `projectCount`, `members` (avatar stack), `href`

**Anti-patterns:**
- Do not modify the visual structure — the avatar stack and count layout is a defined pattern

---

#### ForumPostCard

**Purpose:** Represents a forum thread in a list — shows title, excerpt, author, engagement metrics.

**Props:** `title`, `excerpt`, `authorAvatar`, `authorName`, `authorRole`, `timeAgo`, `viewCount`, `likeCount`, `commentCount`, `href`, `pinned`

**Anti-patterns:**
- Do not truncate `title` to a single line — always allow 2 lines minimum

---

#### TeamCard

**Purpose:** Represents an organization/team in a directory card grid.

**Anti-patterns:**
- Do not use TeamCard for individual people — use MemberCard

---

#### OfficeHoursCard

**Purpose:** Represents a bookable office hours slot for a member. Shows host, time slot, and booking CTA.

**Anti-patterns:**
- Do not show this card without a booking action — the card has no meaning without the CTA

---

#### CTACard

**Purpose:** A lightweight action-prompt card used in dashboard rows (e.g., "Complete your investor profile").

**Props:** `icon`, `title`, `description`, `href`

**Anti-patterns:**
- Do not use CTACard for primary page CTAs — use a full-width Alert or a Button
- Limit to 3 CTACards per row; they become unreadable beyond that

---

## 7. Page Composition Principles

These patterns are extracted from the five implemented page templates in `components/page/`.

### Pattern 1: Centered single column (Team Profile)

Used when a page is about one entity with sequential sections. No sidebar.

```
[NavBar — full width, 56px]
[Page body: max-width 900px, auto margin, padding 40px]
  [Card] Profile header
  [Card] About section (expandable)
  [Card] Data section (definition list / badge rows)
  [Card] Data section
  ...
```

- Cards are white (`--background-base-white`), 1px `--border-neutral-subtle` border, `--radius-lg` (10px), `--shadow-xs`
- Section titles inside cards use `heading-sm` or `label-lg`
- Cards are separated by `24–32px` gap (use `--spacing-xl` or `--spacing-2xl`)
- Edit buttons appear in the card header row, right-aligned

---

### Pattern 2: Two-column with contextual sidebar (Member Profile)

Used for entity detail pages where a secondary action/context panel (e.g., office hours, related content) supports the main content.

```
[NavBar — full width]
[Page body: padding 40px 270px (≈900px content)]
  [← Back breadcrumb]
  [Two-column grid: main ~71% | sidebar ~26%]
    Main: sequential Card stack
    Sidebar: floating card with CTA
```

- Switch to single column below `tablet-landscape` (1024px) — sidebar moves below main
- Sidebar card should have a single focused purpose (one action, one message)

---

### Pattern 3: Filter sidebar + main content (Deals)

Used for browsable directories or catalogues where users filter a list.

```
[NavBar — full width]
[Two-column layout: sidebar ~200px | main flex-1]
  Sidebar:
    "Filters" header + "Clear All"
    SearchInput
    Category checklist (Checkbox × N)
  Main:
    Page title + subtitle + action button
    Sort controls
    Scrollable list of item cards
```

- Filter sidebar is sticky on desktop, collapses to a Drawer on mobile
- Item cards in the main area are full-width within the content column, not a grid
- Provide an empty state when filters return 0 results

---

### Pattern 4: Full-width tabbed list (Forum)

Used for community/feed pages where content is categorized but not spatially filtered.

```
[NavBar — full width]
[Main: max-width ~820px, centered]
  Page title + subtitle
  [Tab bar: All | General | Launch | Talent | Intros] + [Sort dropdown] + [Create CTA]
  Scrollable list of ForumPostCards
```

- Tabs are `line` variant with a `--foreground-brand-primary` underline on active
- Sort and Create button are right-aligned in the same row as the tabs
- No sidebar — the tab bar is the primary filter

---

### Pattern 5: Dashboard home with mixed sections (Home)

Used for the authenticated landing page. Combines greeting, quick actions, a card carousel, and a notification feed.

```
[NavBar — full width]
[Main: max-width 1440px, padding 40px 270px]
  Greeting (h1 + subtitle)
  [3-column CTA grid]      ← CTACards
  Section: Focus Areas
    h2 + description
    [4-column card carousel + dot navigation]  ← FocusAreaCards
  Section: Recent Updates
    h2 + unread badge
    [Stacked update cards]
      [Icon] [Type label + Title + Date + Body + Meta]
      [View more button — right-aligned]
```

- CTA grid collapses to 1 column on mobile
- Carousel becomes single-column with horizontal scroll on mobile
- Update cards have a blue left-border treatment and an unread dot for unseen items **[INFER: blue border on `.unread` cards is a pattern not yet enforced via a token]**

---

### Universal layout rules

1. **NavBar is always at the layout level, not the page level.** It is rendered once in `src/app/layout.tsx` [INFER: currently each template renders its own NavBar — this should be lifted when the templates are integrated into a real app].

2. **Page backgrounds use `--background-neutral-soft-surface`** (#f9fafb). Do not use white as the page background — it eliminates the card-lifts-from-page illusion.

3. **Content cards are always white** (`--background-base-white`) with `--border-neutral-subtle` and `--shadow-xs`.

4. **Never exceed 900px content width** (or 1204px for full-bleed dashboard layouts). All templates enforce this through padding on the page body, not a wrapping `max-width` container, so full-width elements (NavBar, PageHeader) remain unaffected.

5. **Vertical rhythm is 24–32px between sections** (`--spacing-xl` to `--spacing-2xl`). Use 16px gap (`--spacing-md`) between elements within the same card.

6. **Responsive priority order:** Desktop layouts are the primary design target (the PL network is used primarily on desktop). Mobile layouts are simplified but functional — single column, drawer navigation, touch-friendly tap targets (minimum 44px height).
