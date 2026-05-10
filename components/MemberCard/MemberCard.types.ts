import type { HTMLAttributes } from 'react';

export interface MemberCardProps extends HTMLAttributes<HTMLDivElement> {
  avatar?: string;
  name: string;
  role?: string;
  company?: string;
  location?: string;
  tags?: string[];
  href?: string;
  compact?: boolean;
}
