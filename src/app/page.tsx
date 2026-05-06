import styles from './page.module.scss';

const components = [
  { name: 'Button', path: '/button', status: 'planned' },
  { name: 'Input', path: '/input', status: 'planned' },
  { name: 'Badge', path: '/badge', status: 'planned' },
  { name: 'Card', path: '/card', status: 'planned' },
];

export default function HomePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>PL Design System</h1>
        <p className={styles.subtitle}>
          Protocol Labs · Components &amp; tokens extracted from Figma
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Components</h2>
        <ul className={styles.grid}>
          {components.map((c) => (
            <li key={c.name} className={styles.card} data-status={c.status}>
              <span className={styles.cardName}>{c.name}</span>
              <span className={styles.cardStatus}>{c.status}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tokens</h2>
        <div className={styles.tokenPreview}>
          <div className={styles.swatch} style={{ background: 'var(--foreground-brand-primary)' }}>
            <span>brand/primary</span>
          </div>
          <div className={styles.swatch} style={{ background: 'var(--background-neutral-soft-surface)', color: 'var(--foreground-neutral-primary)' }}>
            <span>neutral/soft</span>
          </div>
          <div className={styles.swatch} style={{ background: 'var(--background-brand-soft-surface)', color: 'var(--foreground-brand-primary)' }}>
            <span>brand/soft</span>
          </div>
          <div className={styles.swatch} style={{ background: 'var(--neutral-slate-900)', color: '#fff' }}>
            <span>slate/900</span>
          </div>
        </div>
      </section>
    </main>
  );
}
