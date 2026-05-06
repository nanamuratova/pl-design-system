'use client';

import clsx from 'clsx';
import type { SearchInputProps } from './SearchInput.types';
import styles from './SearchInput.module.scss';

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const ClearIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <line x1="2" y1="2" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="10" y1="2" x2="2" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export function SearchInput({ variant = 'default', onClear, loading = false, fullWidth = false, value, className, ...props }: SearchInputProps) {
  return (
    <div className={clsx(styles.wrapper, fullWidth && styles.fullWidth, className)}>
      <span className={styles.searchIcon}><SearchIcon /></span>
      <input
        type="search"
        value={value}
        className={clsx(styles.input, variant === 'underline' && styles.underline)}
        {...props}
      />
      {loading && <span className={styles.spinner} />}
      {!loading && value && onClear && (
        <button className={styles.clearButton} onClick={onClear} type="button" aria-label="Clear search"><ClearIcon /></button>
      )}
    </div>
  );
}
