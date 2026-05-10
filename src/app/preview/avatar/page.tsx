// /preview/avatar — Avatar + AvatarStack visual verification page
// Use this route to verify every variant against Figma before approving the refactor pass.

import { Avatar, AvatarStack } from '@components/Avatar';
import type { AvatarSize, AvatarShape, AvatarStatus, AvatarBgTint } from '@components/Avatar';
import styles from './page.module.scss';

// Real photo URL for load/error testing
const PHOTO_URL = 'https://i.pravatar.cc/300?img=11';
const BAD_URL = 'https://not-a-real-domain.example/broken.jpg';

export default function AvatarPreviewPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Avatar</h1>
        <p>
          Canonical component — Figma source:{' '}
          <code>Member Card Desktop (36:21630)</code>,{' '}
          <code>Badge OH (36:21660)</code>,{' '}
          <code>FocusAreaCard (46:126)</code>
        </p>
      </header>

      {/* ── 1. Sizes ──────────────────────────────────────────────────────── */}
      <Section title="1 — Sizes (circle, auto-tint, initials)">
        <Row>
          {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as AvatarSize[]).map((size) => (
            <Cell key={size} label={size}>
              <Avatar name="Alex Chen" size={size} bgTint="lavender" />
            </Cell>
          ))}
        </Row>
      </Section>

      {/* ── 2. Photo vs Initials vs Error fallback ────────────────────────── */}
      <Section title="2 — Photo · Initials · Error fallback (md)">
        <Row>
          <Cell label="photo">
            <Avatar name="Alex Chen" src={PHOTO_URL} size="md" />
          </Cell>
          <Cell label="initials">
            <Avatar name="Alex Chen" size="md" bgTint="lavender" />
          </Cell>
          <Cell label="error → initials">
            <Avatar name="Alex Chen" src={BAD_URL} size="md" bgTint="lavender" />
          </Cell>
          <Cell label="single word">
            <Avatar name="Ripple" size="md" bgTint="mint" />
          </Cell>
        </Row>
      </Section>

      {/* ── 3. Background tints ───────────────────────────────────────────── */}
      <Section title="3 — Background tints (lg, initials)">
        <Row>
          {(['lavender', 'mint', 'peach', 'sky', 'rose', 'slate', 'auto'] as AvatarBgTint[]).map(
            (tint) => (
              <Cell key={tint} label={tint}>
                <Avatar name={tint === 'auto' ? 'Sam Rivera' : 'Alex Chen'} size="lg" bgTint={tint} />
              </Cell>
            ),
          )}
        </Row>
        <p className={styles.note}>
          <code>auto</code> picks tint deterministically from name hash — same name always gets the
          same color.
        </p>
      </Section>

      {/* ── 4. Shapes ─────────────────────────────────────────────────────── */}
      <Section title="4 — Shapes (xl, lavender)">
        <Row>
          {(['circle', 'rounded', 'square'] as AvatarShape[]).map((shape) => (
            <Cell key={shape} label={shape}>
              <Avatar name="Alex Chen" size="xl" shape={shape} bgTint="lavender" />
            </Cell>
          ))}
          <Cell label="circle + photo">
            <Avatar name="Alex Chen" src={PHOTO_URL} size="xl" shape="circle" />
          </Cell>
          <Cell label="rounded + photo">
            <Avatar name="Alex Chen" src={PHOTO_URL} size="xl" shape="rounded" />
          </Cell>
          <Cell label="square + photo">
            <Avatar name="Alex Chen" src={PHOTO_URL} size="xl" shape="square" />
          </Cell>
        </Row>
      </Section>

      {/* ── 5. Status pills ───────────────────────────────────────────────── */}
      <Section title="5 — Status pills (2xl, lavender)">
        <p className={styles.note}>
          Figma-confirmed: <code>available</code> and <code>frequently-booked</code> use
          brand-blue CalendarBlank badge (same visual). <code>booked</code> uses warning
          style (no Figma canonical — carried from MemberCard). <code>unavailable</code>
          uses neutral (no Figma canonical).
        </p>
        <Row>
          {(['available', 'frequently-booked', 'booked', 'unavailable'] as AvatarStatus[]).map(
            (status) => (
              <Cell key={status} label={status} tall>
                <Avatar name="Alex Chen" size="2xl" bgTint="lavender" status={status} />
              </Cell>
            ),
          )}
        </Row>
      </Section>

      {/* ── 6. 3xl hero + decorative rings ───────────────────────────────── */}
      <Section title="6 — 3xl hero: rings off vs on">
        <p className={styles.note}>
          Inner ring: 106×106px stroke circle, <code>--border-neutral-subtle</code> @ 40%
          opacity. Outer ring: ~150px dashed-dot circle, <code>#D8DEEC</code> @ 40% opacity
          + 4 accent dots at compass points. SVG paths preserved from Figma localhost export
          (see TODO in Avatar.tsx).
        </p>
        <div className={styles.heroRow}>
          <Cell label="3xl — no rings">
            <Avatar name="Alex Chen" src={PHOTO_URL} size="3xl" />
          </Cell>
          {/* ring container needs extra space so rings aren't clipped */}
          <Cell label="3xl — decorativeRing">
            <div className={styles.heroContainer}>
              <Avatar name="Alex Chen" src={PHOTO_URL} size="3xl" decorativeRing />
            </div>
          </Cell>
          <Cell label="3xl — rings + status">
            <div className={styles.heroContainer}>
              <Avatar
                name="Alex Chen"
                src={PHOTO_URL}
                size="3xl"
                decorativeRing
                status="available"
              />
            </div>
          </Cell>
          <Cell label="3xl — initials + rings">
            <div className={styles.heroContainer}>
              <Avatar name="Alex Chen" size="3xl" bgTint="lavender" decorativeRing />
            </div>
          </Cell>
        </div>
      </Section>

      {/* ── 7. MemberCard gradient context ───────────────────────────────── */}
      <Section title="7 — Figma MemberCard gradient context (visual reference)">
        <p className={styles.note}>
          Replicates the card gradient header to verify ring + badge placement matches the
          Figma screenshot. Avatar positioned at 8px from gradient top (96px section, 80px
          avatar centered).
        </p>
        <div className={styles.cardContext}>
          <div className={styles.cardGradient}>
            <div className={styles.cardAvatarWrap}>
              <Avatar
                name="Alex Chen"
                src={PHOTO_URL}
                size="3xl"
                decorativeRing
                status="available"
              />
            </div>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardName}>Alex Chen</p>
            <p className={styles.cardRole}>Ripple · Senior Engineer</p>
          </div>
        </div>
      </Section>

      {/* ── 8. AvatarStack — gap auto ─────────────────────────────────────── */}
      <Section title="8 — AvatarStack (gap=auto, circle)">
        <p className={styles.note}>
          Auto overlap = <code>round(sizePx × 0.3)</code>. Figma FocusAreaCard uses 8px for
          xs (20px) avatars — equivalent to 40% of size. Auto at xs computes 6px (30%).
          Documented discrepancy; override with <code>gap=8</code> if needed.
        </p>
        <Row>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as AvatarSize[]).map((size) => (
            <Cell key={size} label={`size=${size}`}>
              <AvatarStack size={size}>
                <Avatar name="Alex Chen" size={size} bgTint="lavender" />
                <Avatar name="Sam Rivera" size={size} bgTint="mint" />
                <Avatar name="Jordan Kim" size={size} bgTint="peach" />
              </AvatarStack>
            </Cell>
          ))}
        </Row>
      </Section>

      {/* ── 9. AvatarStack — shapes ───────────────────────────────────────── */}
      <Section title="9 — AvatarStack shapes (md)">
        <Row>
          {(['circle', 'rounded', 'square'] as AvatarShape[]).map((shape) => (
            <Cell key={shape} label={`shape=${shape}`}>
              <AvatarStack size="md" shape={shape}>
                <Avatar name="Alex Chen" size="md" shape={shape} bgTint="lavender" />
                <Avatar name="Sam Rivera" size="md" shape={shape} bgTint="mint" />
                <Avatar name="Jordan Kim" size="md" shape={shape} bgTint="peach" />
              </AvatarStack>
            </Cell>
          ))}
        </Row>
      </Section>

      {/* ── 10. AvatarStack — overflow pill ───────────────────────────────── */}
      <Section title="10 — AvatarStack overflow pill (maxVisible=3)">
        <Row>
          <Cell label="5 avatars, maxVisible=3">
            <AvatarStack size="md" maxVisible={3}>
              <Avatar name="Alex Chen" size="md" bgTint="lavender" />
              <Avatar name="Sam Rivera" size="md" bgTint="mint" />
              <Avatar name="Jordan Kim" size="md" bgTint="peach" />
              <Avatar name="Riley Park" size="md" bgTint="sky" />
              <Avatar name="Casey Mori" size="md" bgTint="rose" />
            </AvatarStack>
          </Cell>
          <Cell label="explicit overflow=12">
            <AvatarStack size="md" maxVisible={3} overflow={12}>
              <Avatar name="Alex Chen" size="md" bgTint="lavender" />
              <Avatar name="Sam Rivera" size="md" bgTint="mint" />
              <Avatar name="Jordan Kim" size="md" bgTint="peach" />
            </AvatarStack>
          </Cell>
          <Cell label="gap override = 2px (dense)">
            <AvatarStack size="md" gap={2}>
              <Avatar name="Alex Chen" size="md" bgTint="lavender" />
              <Avatar name="Sam Rivera" size="md" bgTint="mint" />
              <Avatar name="Jordan Kim" size="md" bgTint="peach" />
            </AvatarStack>
          </Cell>
          <Cell label="gap override = 12px (spacious)">
            <AvatarStack size="md" gap={-12}>
              <Avatar name="Alex Chen" size="md" bgTint="lavender" />
              <Avatar name="Sam Rivera" size="md" bgTint="mint" />
              <Avatar name="Jordan Kim" size="md" bgTint="peach" />
            </AvatarStack>
          </Cell>
        </Row>
      </Section>

      {/* ── 11. Figma FocusAreaCard replica ───────────────────────────────── */}
      <Section title="11 — FocusAreaCard avatar row replica (xs, square, gap=8)">
        <p className={styles.note}>
          Figma uses xs=20px, square (radius-xsm=4px), overlap=8px. AvatarStack
          auto=6px; use <code>gap=8</code> to match Figma exactly.
        </p>
        <Row>
          <Cell label="auto gap (6px)">
            <AvatarStack size="xs" shape="square">
              <Avatar name="A B" size="xs" shape="square" bgTint="slate" src={PHOTO_URL} />
              <Avatar name="C D" size="xs" shape="square" bgTint="slate" src={PHOTO_URL} />
              <Avatar name="E F" size="xs" shape="square" bgTint="slate" />
            </AvatarStack>
          </Cell>
          <Cell label="gap=8 (Figma-exact)">
            <AvatarStack size="xs" shape="square" gap={8}>
              <Avatar name="A B" size="xs" shape="square" bgTint="slate" src={PHOTO_URL} />
              <Avatar name="C D" size="xs" shape="square" bgTint="slate" src={PHOTO_URL} />
              <Avatar name="E F" size="xs" shape="square" bgTint="slate" />
            </AvatarStack>
          </Cell>
        </Row>
      </Section>
    </main>
  );
}

// ─── Layout helpers ──────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className={styles.row}>{children}</div>;
}

function Cell({
  label,
  children,
  tall,
}: {
  label: string;
  children: React.ReactNode;
  tall?: boolean;
}) {
  return (
    <div className={`${styles.cell} ${tall ? styles.cellTall : ''}`}>
      <div className={styles.cellContent}>{children}</div>
      <span className={styles.cellLabel}>{label}</span>
    </div>
  );
}
