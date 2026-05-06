import clsx from 'clsx';
import type { EmptyStateProps } from './EmptyState.types';
import styles from './EmptyState.module.scss';

const DefaultIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 12h24" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export function EmptyState({ icon, title, description, primaryAction, secondaryAction, className, ...props }: EmptyStateProps) {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div className={styles.iconWrapper}>{icon ?? <DefaultIcon />}</div>
      <div>
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {(primaryAction || secondaryAction) && (
        <div className={styles.actions}>{primaryAction}{secondaryAction}</div>
      )}
    </div>
  );
}
