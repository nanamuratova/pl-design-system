# Designer Review — Token Compliance Batch 4

Deviations between the implemented code and Figma canonical designs that require
a design decision before code can be fully reconciled.

---

## 1. ForumPostCard — Avatar size discrepancy

**File:** `components/ForumPostCard/ForumPostCard.module.scss`
**Rule:** `.authorAvatar`

| | Value |
|---|---|
| Code (current) | `28px × 28px` |
| Figma canonical | `24px × 24px` |
| Deviation | 4px (~17%) |

**Current code comment:**
```scss
// size deviates from Figma 24px — verify with design before adjusting
```

**Question for designers:** Is the 28px implementation intentional (e.g. a post-Figma
refinement for better touch target / legibility at smaller viewport), or is it drift
that should be corrected to 24px?

---

## 2. TeamCard — Layout orientation divergence

**File:** `components/TeamCard/TeamCard.module.scss`
**Rule:** Overall card composition

| | Value |
|---|---|
| Code (current) | **Landscape** card — logo + name/tags in horizontal header row, description below, member list at bottom |
| Figma (node 49:5333) | **Portrait** card — gradient header with overlapping centered 80px logo, name/description centered below, tags row |

**Downstream effects of this divergence:**
- Logo size: code uses 52px (fits landscape header), Figma specifies 80px (portrait anchor).
  Code retains 52px with comment until this is resolved.

**Question for designers:** Which layout is canonical going forward — the portrait Figma
spec or the landscape code implementation? If the landscape layout is preferred, the
Figma file should be updated to reflect it.

---

*Filed during token compliance pass — Batch 4 (May 2026)*
