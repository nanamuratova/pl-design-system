'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import clsx from 'clsx';
import type { TabsRootProps, TabsListProps, TabsTriggerProps, TabsContentProps } from './Tabs.types';
import styles from './Tabs.module.scss';

export function Tabs({ variant = 'line', size, className, ...props }: TabsRootProps) {
  return <TabsPrimitive.Root className={clsx(styles.root, className)} data-variant={variant} data-size={size} {...props} />;
}

export function TabsList({ className, ...props }: TabsListProps & { variant?: 'line' | 'enclosed' | 'pill' }) {
  const { variant = 'line', ...rest } = props as TabsListProps & { variant?: 'line' | 'enclosed' | 'pill' };
  return <TabsPrimitive.List className={clsx(styles[`list-${variant}`], className)} {...rest} />;
}

export function TabsTrigger({ badge, icon, children, className, ...props }: TabsTriggerProps & { variant?: 'line' | 'enclosed' | 'pill' }) {
  const { variant = 'line', ...rest } = props as TabsTriggerProps & { variant?: 'line' | 'enclosed' | 'pill' };
  return (
    <TabsPrimitive.Trigger className={clsx(styles[`trigger-${variant}`], className)} {...rest}>
      {icon}{children}
      {badge !== undefined && <span className={styles.badge}>{badge}</span>}
    </TabsPrimitive.Trigger>
  );
}

export function TabsContent({ className, ...props }: TabsContentProps) {
  return <TabsPrimitive.Content className={clsx(styles.content, className)} {...props} />;
}
