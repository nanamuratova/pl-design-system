import clsx from 'clsx';
import type { TableProps, TableHeadProps, TableBodyProps, TableRowProps, TableHeaderProps, TableCellProps } from './Table.types';
import styles from './Table.module.scss';

const SortIcon = ({ sorted }: { sorted?: 'asc' | 'desc' | false }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={styles.sortIcon}>
    {sorted === 'asc' ? (
      <polyline points="3,9 7,5 11,9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ) : sorted === 'desc' ? (
      <polyline points="3,5 7,9 11,5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ) : (
      <>
        <polyline points="3,6 7,3 11,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="3,8 7,11 11,8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    )}
  </svg>
);

export function Table({ fullWidth = true, className, children, ...props }: TableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={clsx(styles.table, fullWidth && styles.fullWidth, className)} {...props}>{children}</table>
    </div>
  );
}
export function TableHead({ ...props }: TableHeadProps) { return <thead {...props} />; }
export function TableBody({ ...props }: TableBodyProps) { return <tbody {...props} />; }
export function TableRow({ selected, className, ...props }: TableRowProps) {
  return <tr className={clsx(styles.row, selected && styles.selected, className)} {...props} />;
}
export function TableHeader({ sortable, sorted, onSort, children, className, ...props }: TableHeaderProps) {
  return (
    <th className={clsx(styles.th, sortable && styles.sortable, sorted && styles.sorted, className)} onClick={sortable ? onSort : undefined} {...props}>
      <span className={styles.thInner}>{children}{sortable && <SortIcon sorted={sorted} />}</span>
    </th>
  );
}
export function TableCell({ className, ...props }: TableCellProps) {
  return <td className={clsx(styles.td, className)} {...props} />;
}
