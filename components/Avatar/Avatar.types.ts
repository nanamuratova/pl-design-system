// Avatar component types
// Figma source: Cards canvas — "Member Card Desktop" (36:21630), "Badge OH" (36:21660)

// Size scale: xs=20 sm=28 md=32 lg=40 xl=48 2xl=56 3xl=80
// 3xl is the canonical MemberCard hero size (Figma-verified).
// sm=28 is used for ForumPostCard — deviates from nearest Figma step (md=32).
// This deviation is tracked in DESIGNER_REVIEW.md until design clarification.
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

// circle  = border-radius: 50%         — member photos, profiles
// rounded = border-radius: var(--radius-xl, 12px) — team/org logos
// square  = border-radius: var(--radius-xsm, 4px) — FocusAreaCard stacks (Figma-verified)
export type AvatarShape = 'circle' | 'rounded' | 'square';

// available, frequently-booked — Figma-confirmed: brand-blue CalendarBlank badge
// booked     — no Figma variant; carried from MemberCard implementation (warning style)
// unavailable — no Figma variant; carried from MemberCard implementation (neutral style)
export type AvatarStatus = 'available' | 'booked' | 'frequently-booked' | 'unavailable';

// Explicit tints or 'auto' (deterministic hash from name)
// lavender (#C6CAFF) and slate (#AFBACA) are Figma-verified from MemberCard + FocusAreaCard
export type AvatarBgTint =
  | 'lavender'
  | 'mint'
  | 'peach'
  | 'sky'
  | 'rose'
  | 'slate'
  | 'auto';

export interface AvatarProps {
  /** Full name used for initials fallback and aria-label when no explicit label given */
  name: string;
  /** Photo URL — on load error falls back to initials */
  src?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  /** Availability/calendar status pill rendered below the avatar */
  status?: AvatarStatus;
  /** Background tint for the initials surface. 'auto' picks deterministically from name hash */
  bgTint?: AvatarBgTint;
  /** Renders the two-ring decorative halo (inner 106px + outer 150px). Only meaningful at 3xl size. */
  decorativeRing?: boolean;
  className?: string;
  'aria-label'?: string;
}

export interface AvatarStackProps {
  children: React.ReactNode;
  /**
   * Overlap between adjacent avatars in px.
   * 'auto' (default) computes round(sizePx * 0.3).
   * Pass a number to override for dense or spacious layouts.
   * Figma FocusAreaCard uses 8px for xs (20px) avatars — equivalent to 40% of size.
   */
  gap?: number | 'auto';
  /** Clip to N avatars and show +overflow pill */
  maxVisible?: number;
  /** Explicit overflow count — omit to auto-compute from children.length */
  overflow?: number;
  /** Passed through to the overflow pill; should match children's size prop */
  size?: AvatarSize;
  /** Border-radius of the overflow pill; should match children's shape prop */
  shape?: AvatarShape;
  className?: string;
}
