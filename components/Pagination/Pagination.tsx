'use client';

import { useState } from 'react';
import clsx from 'clsx';
import type { PaginationProps } from './Pagination.types';
import styles from './Pagination.module.scss';

const Prev = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><polyline points="10,4 6,8 10,12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const Next = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><polyline points="6,4 10,8 6,12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;

function getPageRange(current: number, total: number, siblings = 1) {
  const pages: (number | '...')[] = [];
  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);
  pages.push(1);
  if (left > 2) pages.push('...');
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < total - 1) pages.push('...');
  if (total > 1) pages.push(total);
  return pages;
}

export function Pagination({ currentPage, totalPages, onPageChange, variant = 'basic', siblingCount = 1, className, ...props }: PaginationProps) {
  const [gotoValue, setGotoValue] = useState('');
  const pages = getPageRange(currentPage, totalPages, siblingCount);

  if (variant === 'compact') {
    return (
      <nav className={clsx(styles.root, className)} {...props}>
        <button className={styles.button} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}><Prev /></button>
        <span className={styles.pageInfo}>{currentPage} / {totalPages}</span>
        <button className={styles.button} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages}><Next /></button>
      </nav>
    );
  }

  return (
    <nav className={clsx(styles.root, className)} {...props}>
      <button className={styles.button} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}><Prev />{variant === 'with-text' && 'Previous'}</button>
      {pages.map((page, i) =>
        page === '...' ? (
          <span key={`dots-${i}`} className={styles.dots}>…</span>
        ) : (
          <button key={page} className={clsx(styles.button, page === currentPage && styles.active)} onClick={() => onPageChange(page as number)}>{page}</button>
        )
      )}
      <button className={styles.button} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages}>{variant === 'with-text' && 'Next'}<Next /></button>
      {variant === 'goto' && (
        <div className={styles.gotoWrapper}>
          Go to
          <input className={styles.gotoInput} type="number" value={gotoValue} min={1} max={totalPages}
            onChange={e => setGotoValue(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') { const p = parseInt(gotoValue); if (p >= 1 && p <= totalPages) { onPageChange(p); setGotoValue(''); } } }}
          />
        </div>
      )}
    </nav>
  );
}
