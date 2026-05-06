'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import type { TooltipProps } from './Tooltip.types';
import styles from './Tooltip.module.scss';

export function Tooltip({
  children, content, title, theme = 'dark', size = 'md',
  side = 'top', align = 'center', delayDuration = 400,
  open, onOpenChange,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={delayDuration} open={open} onOpenChange={onOpenChange}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side} align={align} sideOffset={6}
            className={clsx(styles.content, styles[`size-${size}`], styles[`theme-${theme}`])}
          >
            {title && <span className={styles.title}>{title}</span>}
            {content}
            <TooltipPrimitive.Arrow className={styles.arrow} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
