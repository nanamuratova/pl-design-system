# Protocol Labs Design System

A component library and token system built from Protocol Labs' Figma design files, intended for use by AI tools and engineers building PL-ecosystem products.

## Purpose

This repository gives AI coding tools (Claude, Cursor, etc.) and engineers a single, authoritative source for Protocol Labs UI: canonical design tokens, typed React components, and documented design intent. The primary workflow it enables:

> PM describes a feature → AI tool reads this repo → generates implementation that matches PL brand out of the box → designer reviews and refines.

It is not a production npm package. It is a **living reference implementation** — run it locally, read the source, and copy components into your project.

## Quick Start

```bash
git clone https://github.com/nanamuratova/pl-design-system.git
cd pl-design-system
npm install
npm run dev
```

Individual component showcases:

```
/preview/avatar
/preview/forum-post-card
/preview/focus-area-card
/preview/memberprofilecard
/preview/navbar
/preview/office-hours-card
/preview/team-card
```

Composed page examples:

```
/templates/member-directory   ← hero grid with MemberProfileCard
/templates/member-profile
/templates/team-profile
/templates/forum
/templates/home
/templates/deals
```

## For AI Tools

If you are Claude, Cursor, or a similar AI tool reading this repo:

1. **Read `DESIGN.md` first.** It is the editorial layer — brand identity, component principles, token architecture, usage rules, and anti-patterns. It is the source of truth for system *intent*.

2. **Read `tokens/` for design values.** Three-layer architecture: primitives (`--global-color-*`) → semantic (`--foreground-*`, `--background-*`) → component. Components consume only the semantic/component layer — never reach into primitives.

3. **Read `CLAUDE.md` for build rules.** File conventions, path aliases (`@components/`, `@/`), SCSS patterns, and component checklist.

4. **Read `components/` for implementations.** Each component has `.tsx`, `.module.scss`, `.types.ts`, and `index.ts`.

5. **Pair prompts with Figma reference images when available.** Output fidelity improves significantly when prompts include visual references alongside this system definition.

## Tech Stack

| | |
|---|---|
| Framework | Next.js 14, App Router |
| Language | TypeScript (strict) |
| Styling | SCSS Modules + CSS Custom Properties |
| Accessibility | Radix UI primitives (Dropdown, ContextMenu, Slider, etc.) |
| Typography | Inter v4.1 (variable, self-hosted) |
| Icons | Phosphor Icons (regular weight) |
| No Tailwind | All values come from the token system |

## Repository Structure

```
pl-design-system/
├── DESIGN.md              # Editorial layer — read first
├── CLAUDE.md              # AI/Cursor build rules
├── DESIGNER_REVIEW.md     # Open design decisions
├── tokens/                # Three-layer token system
│   ├── colors.scss        # Color primitives + semantic aliases
│   ├── typography.scss    # Type scale tokens
│   ├── spacing.scss       # Spacing scale
│   └── index.scss         # Entry point
├── components/            # 38 components
├── styles/                # globals.scss, mixins.scss, media.scss
├── assets/                # icons/, logos/ (SVG)
├── public/fonts/          # Inter variable font files
├── mockups/               # Page-level compositions (reference only)
└── src/app/
    ├── preview/           # Per-component showcase routes
    └── templates/         # Full page template routes
```

## Component Inventory

**Foundation**
`Avatar` · `AvatarStack`

**Form controls**
`Button` · `Input` · `Textarea` · `Checkbox` · `Switch` · `Slider` · `SearchInput` · `Upload` · `Toggle`

**Navigation**
`NavBar` · `Sidebar` · `BottomNav` · `Tabs` · `Drawer` · `Dropdown` · `ContextMenu` · `Pagination` · `Steps` · `Accordion`

**Feedback**
`Alert` · `Badge` · `Tooltip` · `Progress` · `EmptyState`

**Data display**
`Table` · `Lightbox` · `Carousel` · `PageHeader`

**Cards**
`MemberCard` · `MemberProfileCard` · `TeamCard` · `ForumPostCard` · `OfficeHoursCard` · `FocusAreaCard` · `CTACard`

**Shells (empty — see DESIGN.md §8)**
`Card` · `DatePicker` · `Icon`

## Known Limits

This system was built through AI-assisted translation of Figma designs. Honest fidelity assessment:

| Area | Fidelity |
|---|---|
| Tokens: color, typography, spacing, radius | High |
| Component structure, variants, behavior | High |
| Avatar primitive (sizes, shapes, initials logic) | High — Figma-verified |
| Visual brand expression (gradient nuance, decorative detail) | Moderate — may need designer refinement |
| Empty shell components (Card, DatePicker) | Low — structure only, not implemented |

For AI-generated UI using this system: text prompts alone produce useful starting points but may diverge meaningfully from specific designs. Pairing prompts with Figma reference images significantly improves output fidelity. Treat generated output as a strong starting point for designer and engineer polish, not as production-ready.

One open design question remains — see `DESIGNER_REVIEW.md`.

## Open Questions

See [`DESIGNER_REVIEW.md`](./DESIGNER_REVIEW.md) for unresolved design decisions affecting specific components.

## License

MIT — see [`LICENSE`](./LICENSE).

## Acknowledgments

Built by [Nana Muratova](https://github.com/nanamuratova) at Protocol Labs as an exploration of AI-assisted design system workflows.
