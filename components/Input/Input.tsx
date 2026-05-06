'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';
import type { InputProps } from './Input.types';
import styles from './Input.module.scss';

const sizeMap = { sm: styles['size-sm'], md: styles['size-md'], lg: styles['size-lg'] };

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, size = 'md', leftIcon, rightIcon, fullWidth = false, id, className, ...props }, ref
) {
  const inputId = id ?? `input-${Math.random().toString(36).slice(2)}`;
  return (
    <div className={clsx(styles.wrapper, fullWidth && styles.fullWidth)}>
      {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        {leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}
        <input
          ref={ref} id={inputId}
          className={clsx(styles.input, sizeMap[size], leftIcon && styles.hasLeftIcon, rightIcon && styles.hasRightIcon, className)}
          data-error={!!error}
          {...props}
        />
        {rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
      {!error && hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
});
