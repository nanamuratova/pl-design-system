'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import type { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.scss';

const sizeMap = { sm: styles['size-sm'], md: styles['size-md'], lg: styles['size-lg'] };
const iconSize = { sm: 10, md: 12, lg: 14 };

export function Checkbox({ size = 'md', label, description, id, className, ...props }: CheckboxProps) {
  const checkboxId = id ?? `checkbox-${Math.random().toString(36).slice(2)}`;
  const s = iconSize[size];
  return (
    <div className={clsx(styles.wrapper, className)}>
      <CheckboxPrimitive.Root id={checkboxId} className={clsx(styles.root, sizeMap[size])} {...props}>
        <CheckboxPrimitive.Indicator className={styles.indicator}>
          {props.checked === 'indeterminate' ? (
            <svg width={s} height={s} viewBox="0 0 16 16"><line x1="3" y1="8" x2="13" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          ) : (
            <svg width={s} height={s} viewBox="0 0 16 16"><polyline points="3,8 6.5,11.5 13,4.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {(label || description) && (
        <div className={styles.textContent}>
          {label && <label htmlFor={checkboxId} className={styles.label}>{label}</label>}
          {description && <span className={styles.description}>{description}</span>}
        </div>
      )}
    </div>
  );
}
