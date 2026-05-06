import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import type { Root, Item } from '@radix-ui/react-accordion';
export type AccordionRootProps = ComponentPropsWithoutRef<typeof Root>;
export type AccordionItemProps = ComponentPropsWithoutRef<typeof Item> & { children: ReactNode; };
export interface AccordionTriggerProps { children: ReactNode; icon?: ReactNode; className?: string; }
export interface AccordionContentProps { children: ReactNode; className?: string; }
