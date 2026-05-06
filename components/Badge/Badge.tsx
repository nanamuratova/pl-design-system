import clsx from 'clsx';
import type { BadgeProps, BadgeDotProps } from './Badge.types';
import styles from './Badge.module.scss';

const sizeMap = { sm: styles['size-sm'], md: styles['size-md'], lg: styles['size-lg'] };
const dotSizeMap = { sm: styles['dot-sm'], md: styles['dot-md'], lg: styles['dot-lg'] };

export function Badge({
  color = 'blue', styleType = 'light', size = 'md',
  leftIcon, rightIcon, brandLogo, dot = false, disabled = false,
  className, children, ...props
}: BadgeProps) {
  const colorStyleKey = `${color}-${styleType}` as keyof typeof styles;
  return (
    <span className={clsx(styles.badge, sizeMap[size], styles[colorStyleKey], disabled && styles.disabled, className)} {...props}>
      {dot && <span className={clsx(styles.dot, dotSizeMap[size])} aria-hidden="true" />}
      {brandLogo && <span className={styles.icon}>{brandLogo}</span>}
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </span>
  );
}

export function BadgeDot({ color = 'blue', size = 'md', className, ...props }: BadgeDotProps) {
  return <span className={clsx(styles.dot, dotSizeMap[size], className)} aria-hidden="true" {...props} />;
}
