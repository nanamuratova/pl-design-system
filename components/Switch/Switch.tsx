'use client';

import * as SwitchPrimitive from '@radix-ui/react-switch';
import clsx from 'clsx';
import type { SwitchProps } from './Switch.types';
import styles from './Switch.module.scss';

const sizeMap = { sm: styles['size-sm'], md: styles['size-md'], lg: styles['size-lg'] };
const thumbSizeMap = { sm: styles['thumb-sm'], md: styles['thumb-md'], lg: styles['thumb-lg'] };

export function Switch({ size = 'md', label, description, labelPosition = 'right', className, id, ...props }: SwitchProps) {
  const switchId = id ?? `switch-${Math.random().toString(36).slice(2)}`;
  return (
    <div className={clsx(styles.wrapper, labelPosition === 'left' && styles['wrapper-left'], className)}>
      <SwitchPrimitive.Root id={switchId} className={clsx(styles.root, sizeMap[size])} {...props}>
        <SwitchPrimitive.Thumb className={clsx(styles.thumb, thumbSizeMap[size])} />
      </SwitchPrimitive.Root>
      {(label || description) && (
        <div className={styles.textContent}>
          {label && <label htmlFor={switchId} className={styles.label}>{label}</label>}
          {description && <span className={styles.description}>{description}</span>}
        </div>
      )}
    </div>
  );
}
