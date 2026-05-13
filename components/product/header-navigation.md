# Header & Navigation

Canonical Figma path: `Product Components / Header & Nav`
Status: TODO verify exact variant names via MCP

---

## Variants

| Variant | Description |
|---|---|
| Desktop header | Full navigation with logo, nav items, search, bell, avatar |
| Mobile header | Compact header with logo, hamburger or bottom nav |

---

## Anatomy

- **Logo** — Protocol Labs / LabOS mark or wordmark
- **Primary nav items** — main section links (Directory, Events, Forum, Deals, etc.)
- **Active state** — current section visually indicated
- **Search** — Global search trigger or inline search field
- **Notification bell** — unread indicator badge
- **User avatar menu** — avatar + dropdown with profile, settings, sign out

---

## Nav items (PL Network)

- Directory
- Events
- Demo Day
- Forum
- Deals
- Founder Guides
- Job Board
- (More / overflow on narrow desktop)

---

## Rules

- Do not compose a custom header from raw HTML — use the canonical Header & Nav component
- Mobile must use the mobile variant — do not scale down the desktop header
- Active nav item uses canonical active treatment — do not override with custom underlines or colors
- Notification bell unread count uses canonical Badge component
- Avatar menu uses canonical Dropdown or Context Menu component

---

## Mobile navigation

On mobile, the primary navigation moves to the Bottom Navigation bar (see `bottom-navigation.md`). The mobile header contains logo + optional search trigger only.

---

## AI instruction

Instantiate from `Product Components / Header & Nav` in the Figma library. If unavailable:
```
Missing canonical component: Header & Nav
```
