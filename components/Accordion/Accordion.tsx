'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import clsx from 'clsx';
import type { AccordionRootProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps } from './Accordion.types';
import styles from './Accordion.module.scss';

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <polyline points="4,6 8,10 12,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function Accordion({ className, ...props }: AccordionRootProps & { className?: string }) {
  return <AccordionPrimitive.Root className={clsx(styles.root, className)} {...(props as AccordionRootProps)} />;
}
export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return <AccordionPrimitive.Item className={clsx(styles.item, className)} {...props} />;
}
export function AccordionTrigger({ children, icon, className }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger className={clsx(styles.trigger, className)}>
        {children}
        <span className={styles.chevron}>{icon ?? <ChevronIcon />}</span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}
export function AccordionContent({ children, className }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content className={clsx(styles.content, className)}>
      <div className={styles.contentInner}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
