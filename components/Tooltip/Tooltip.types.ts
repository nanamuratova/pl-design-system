import type { ReactNode } from 'react';
export type TooltipTheme = 'light' | 'blue' | 'dark';
export type TooltipSize = 'sm' | 'md' | 'lg';
export interface TooltipProps {
  children: ReactNode; content: ReactNode; title?: string;
  theme?: TooltipTheme; size?: TooltipSize;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  delayDuration?: number; open?: boolean; onOpenChange?: (open: boolean) => void;
}
