'use client';

import React, { useState } from 'react';
import { CalendarBlank } from '@phosphor-icons/react';
import styles from './Avatar.module.scss';
import type { AvatarProps, AvatarStackProps, AvatarSize, AvatarBgTint, AvatarShape } from './Avatar.types';

// ─── Size lookup ─────────────────────────────────────────────────────────────

const SIZE_PX: Record<AvatarSize, number> = {
  xs: 20,
  sm: 28,
  md: 32,
  lg: 40,
  xl: 48,
  '2xl': 56,
  '3xl': 80,
};

// ─── Tint palette ─────────────────────────────────────────────────────────────
// lavender (#C6CAFF) — Figma-verified: MemberCard hero avatar background
// slate (#AFBACA)    — Figma-verified: FocusAreaCard stacked team avatars

const TINTS: AvatarBgTint[] = ['lavender', 'mint', 'peach', 'sky', 'rose', 'slate'];

function resolveTint(name: string, tint: AvatarBgTint = 'auto'): AvatarBgTint {
  if (tint !== 'auto') return tint;
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return TINTS[hash % TINTS.length];
}

// ─── Initials ─────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

// ─── Decorative ring SVGs ─────────────────────────────────────────────────────
// Source: Figma "Member Card Desktop" (36:21630) — inner (36:21634) + outer (36:21636)
// Inner: 106×106px, 1px stroke ring, color = --border-neutral-subtle @ path opacity 0.4
// Outer: ~150×150px, 1px stroke ring (#D8DEEC) + 4 decorative dot accents
//
// TODO: These SVGs are approximated with preserved paths from Figma localhost export.
// When the production SVG assets are available in the design handoff, replace the
// inline path data below with the canonical files. Component API (decorativeRing prop)
// will not change between approximation and final SVG.

function RingInner() {
  return (
    <svg
      aria-hidden="true"
      className={styles.ringInner}
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <g clipPath="url(#ring-inner-clip)">
        <path
          opacity="0.4"
          d="M53 105C81.7188 105 105 81.7188 105 53C105 24.2812 81.7188 1 53 1C24.2812 1 1 24.2812 1 53C1 81.7188 24.2812 105 53 105Z"
          stroke="var(--border-neutral-subtle)"
        />
      </g>
      <defs>
        <clipPath id="ring-inner-clip">
          <rect width="106" height="106" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function RingOuter() {
  return (
    <svg
      aria-hidden="true"
      className={styles.ringOuter}
      viewBox="0 0 149.98 150.106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <path
        opacity="0.4"
        d="M74.9898 149.606C116.129 149.606 149.48 116.228 149.48 75.0532C149.48 33.8786 116.129 0.5 74.9898 0.5C33.8502 0.5 0.5 33.8786 0.5 75.0532C0.5 116.228 33.8502 149.606 74.9898 149.606Z"
        stroke="#D8DEEC"
      />
      <circle opacity="0.4" cx="139.276" cy="37.266" r="2.551" fill="#D8DEEC" />
      <circle opacity="0.4" cx="9.684" cy="39.309" r="2.551" fill="#D8DEEC" />
      <circle opacity="0.4" cx="3.561" cy="97.521" r="2.551" fill="#D8DEEC" />
      <circle opacity="0.4" cx="145.398" cy="97.521" r="2.551" fill="#D8DEEC" />
    </svg>
  );
}

// ─── Status pill label map ─────────────────────────────────────────────────────

const STATUS_LABEL: Record<NonNullable<AvatarProps['status']>, string> = {
  available: 'Available to connect',
  booked: 'Booked',
  'frequently-booked': 'Frequently Booked',
  unavailable: 'Unavailable',
};

// ─── Avatar ───────────────────────────────────────────────────────────────────

export function Avatar({
  name,
  src,
  size = 'md',
  shape = 'circle',
  status,
  bgTint = 'auto',
  decorativeRing = false,
  className,
  'aria-label': ariaLabel,
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showPhoto = Boolean(src) && !imgError;
  const resolvedTint = resolveTint(name, bgTint);
  const initials = getInitials(name);
  const showRings = decorativeRing && size === '3xl';

  const rootClasses = [
    styles.root,
    styles[`size-${size}`],
    styles[`shape-${shape}`],
    showRings ? styles.hasRings : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={rootClasses}
      role="img"
      aria-label={ariaLabel ?? name}
    >
      {showRings && (
        <>
          <RingOuter />
          <RingInner />
        </>
      )}

      {/* Background tint surface — always rendered as the fallback layer */}
      <div className={`${styles.surface} ${styles[`tint-${resolvedTint}`]}`}>
        {showPhoto ? (
          <img
            src={src}
            alt=""
            className={styles.photo}
            onError={() => setImgError(true)}
            aria-hidden="true"
          />
        ) : (
          <span className={styles.initials} aria-hidden="true">
            {initials}
          </span>
        )}
      </div>

      {status && (
        <div className={`${styles.pill} ${styles[`pill-${status}`]}`}>
          {status !== 'unavailable' && (
            <CalendarBlank
              weight="regular"
              className={styles.pillIcon}
              aria-hidden="true"
            />
          )}
          <span>{STATUS_LABEL[status]}</span>
        </div>
      )}
    </div>
  );
}

// ─── AvatarStack ──────────────────────────────────────────────────────────────

export function AvatarStack({
  children,
  gap = 'auto',
  maxVisible,
  overflow,
  size = 'md',
  shape = 'circle',
  className,
}: AvatarStackProps) {
  const allItems = React.Children.toArray(children);
  const visibleItems = maxVisible != null ? allItems.slice(0, maxVisible) : allItems;
  const hiddenCount =
    overflow != null
      ? overflow
      : maxVisible != null && allItems.length > maxVisible
        ? allItems.length - maxVisible
        : 0;

  const sizePx = SIZE_PX[size];
  const overlapPx = gap === 'auto' ? Math.round(sizePx * 0.3) : gap;

  return (
    <div className={`${styles.stack} ${className ?? ''}`}>
      {visibleItems.map((child, i) => (
        <div
          key={i}
          className={styles.stackItem}
          style={i > 0 ? { marginLeft: -overlapPx } : undefined}
        >
          {child}
        </div>
      ))}
      {hiddenCount > 0 && (
        <div
          className={`${styles.stackOverflow} ${styles[`size-${size}`]} ${styles[`shape-${shape}`]}`}
          style={{ marginLeft: -overlapPx }}
          aria-label={`${hiddenCount} more`}
        >
          <span>+{hiddenCount}</span>
        </div>
      )}
    </div>
  );
}
