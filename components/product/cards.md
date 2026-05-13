# Cards

Canonical Figma path: `Product Components / Cards`
Status: TODO verify exact sub-component paths via MCP

---

## Overview

Cards are product components, not generic layout primitives. Each card type is a distinct canonical component in the Figma library. Do not compose cards from raw div containers.

---

## Card types

### Focus Area Cards
Purpose: Represent a focus area or domain topic (e.g., DeSci, DeFi, Infrastructure)
Content: Icon or illustration, title, short description, member count or tag
Canonical path: TODO verify

### Homepage Cards
Purpose: Featured content on the home dashboard
Content: Title, excerpt, metadata, optional CTA
Canonical path: TODO verify

### Updates Cards
Purpose: Announcements and updates from teams or projects
Content: Author avatar, title, timestamp, short body
Canonical path: `Product Components / Updates Cards`

### Directory Member Cards
Purpose: Member profile preview in the Members directory
Content: Avatar, name, role/title, organization, focus area tags
Canonical path: `Product Components / Cards` (Member variant)

### Team Cards
Purpose: Team/project preview in the Teams directory
Content: Team logo or avatar, team name, description, member count
Canonical path: TODO verify

### Forum Cards
Purpose: Forum thread/post preview
Content: Author, title, category, reply count, timestamp
Canonical path: `Product Components / Forum Cards`

### Deals Cards
Purpose: Investment deal preview
Content: Company logo, company name, deal type, stage, amount, tags
Canonical path: `Product Components / Deals Cards`

### Demo Day Cards
Purpose: Demo Day event or cohort entry preview
Content: Company name, logo, cohort, pitch summary, tags
Canonical path: `Product Components / Demo Day Cards`

### Job Board Cards
Purpose: Job listing preview
Content: Company, role title, location, type, compensation, tags
Canonical path: `Product Components / Jobs Cards`

### Founder Guides Cards
Purpose: Resource/guide article preview
Content: Title, category, read time, author, thumbnail
Canonical path: `Product Components / Founder Guides Cards`

### Office Hours Cards
Purpose: Office hours session preview
Content: Host avatar, host name, topic, date/time, availability
Canonical path: `Product Components / Office Hours Cards`

### Topic Cards
Purpose: Community topic or category navigation
Content: Topic icon, name, description, post count
Canonical path: TODO verify

### Comment Cards
Purpose: Comment preview or summary in a thread list
Content: Author avatar, author name, comment excerpt, timestamp, reaction count
Canonical path: `Product Components / Comments`

---

## Rules for all card types

- **Title / primary content must dominate** — it is the visual entry point
- **Metadata is secondary** — smaller, lower contrast than title
- **Tags/badges are tertiary** — do not make them compete with the title
- **Actions are clear but not dominant** — do not use large button CTAs inside cards
- Never overload a card with more than 3–4 badges
- Cards use **elevation (shadow)** not border for surface definition
- Do not compose cards from raw div containers — always instantiate the canonical card component

---

## AI instruction

Instantiate the appropriate card component from the Figma library. If unavailable:
```
Missing canonical component: [specific card type, e.g. "Forum Cards"]
```
