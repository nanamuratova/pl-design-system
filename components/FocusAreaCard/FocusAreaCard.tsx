import clsx from 'clsx';
import type { FocusAreaCardProps } from './FocusAreaCard.types';
import styles from './FocusAreaCard.module.scss';

const MAX_AVATARS = 4;

export function FocusAreaCard({ title, description, teamCount, projectCount, members = [], href, className, ...props }: FocusAreaCardProps) {
  const Tag = href ? 'a' : 'div';
  const visibleMembers = members.slice(0, MAX_AVATARS);
  const overflow = members.length - MAX_AVATARS;

  return (
    <Tag href={href} className={clsx(styles.root, className)} {...props as any}>
      <div className={styles.title}>{title}</div>
      {description && <p className={styles.description}>{description}</p>}

      {(teamCount !== undefined || projectCount !== undefined) && (
        <div className={styles.stats}>
          {teamCount !== undefined && (
            <div className={styles.statRow}>
              <span className={styles.statLabel}>{teamCount} Teams</span>
              <div className={styles.statRight}>
                {visibleMembers.length > 0 && (
                  <div className={styles.avatarStack}>
                    {visibleMembers.map((m, i) => (
                      <span key={i} className={styles.avatarItem}>
                        {m.avatar ? <img src={m.avatar} alt={m.name} /> : m.name.slice(0, 1)}
                      </span>
                    ))}
                    {overflow > 0 && <span className={styles.overflow}>+{overflow}</span>}
                  </div>
                )}
                <span className={styles.arrow}>→</span>
              </div>
            </div>
          )}
          {projectCount !== undefined && (
            <div className={styles.statRow}>
              <span className={styles.statLabel}>{projectCount} Projects</span>
              <span className={styles.arrow}>→</span>
            </div>
          )}
        </div>
      )}
    </Tag>
  );
}
