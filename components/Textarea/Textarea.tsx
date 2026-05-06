'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';
import type { TextareaProps } from './Textarea.types';
import styles from './Textarea.module.scss';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, hint, error, fullWidth = false, resize = 'vertical', id, className, style, ...props }, ref
) {
  const textareaId = id ?? `textarea-${Math.random().toString(36).slice(2)}`;
  return (
    <div className={clsx(styles.wrapper, fullWidth && styles.fullWidth)}>
      {label && <label htmlFor={textareaId} className={styles.label}>{label}</label>}
      <textarea
        ref={ref} id={textareaId}
        className={clsx(styles.textarea, className)}
        style={{ resize, ...style }}
        data-error={!!error}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
      {!error && hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
});
