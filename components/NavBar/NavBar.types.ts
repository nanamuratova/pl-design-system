import type { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  badge?: number;
}

export interface NavBarProps {
  logo?: ReactNode;
  logoHref?: string;
  items?: NavItem[];
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  notificationCount?: number;
  onNotificationClick?: () => void;
  avatar?: string;
  avatarFallback?: string;
  userName?: string;
  onAvatarClick?: () => void;
  onMenuClick?: () => void;
  actions?: ReactNode;
  className?: string;
}
