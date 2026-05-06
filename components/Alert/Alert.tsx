import clsx from 'clsx';
import type { AlertProps } from './Alert.types';
import styles from './Alert.module.scss';

const defaultIcons = {
  info: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/><line x1="10" y1="9" x2="10" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="6.5" r="0.75" fill="currentColor"/></svg>,
  success: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/><polyline points="6.5,10.5 8.5,12.5 13.5,7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  warning: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3L18 17H2L10 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><line x1="10" y1="9" x2="10" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="15.5" r="0.75" fill="currentColor"/></svg>,
  error: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/><line x1="7" y1="7" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="13" y1="7" x2="7" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
};

const CloseIcon = () => <svg width="16" height="16" viewBox="0 0 16 16"><line x1="3" y1="3" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="13" y1="3" x2="3" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;

export function Alert({ variant = 'info', styleType = 'light', title, description, icon, action, onClose, closable, className, children, ...props }: AlertProps) {
  const key = `${variant}-${styleType}` as keyof typeof styles;
  return (
    <div className={clsx(styles.alert, styles[key], className)} role="alert" {...props}>
      <span className={styles.icon}>{icon ?? defaultIcons[variant]}</span>
      <div className={styles.content}>
        {title && <span className={styles.title}>{title}</span>}
        {description && <p className={styles.description}>{description}</p>}
        {children}
        {action && <div className={styles.action}>{action}</div>}
      </div>
      {(closable || onClose) && (
        <button className={styles.closeButton} onClick={onClose} aria-label="Close"><CloseIcon /></button>
      )}
    </div>
  );
}
