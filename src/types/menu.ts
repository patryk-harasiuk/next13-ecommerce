import { Icons } from '@/components/icon';

export interface MenuItem {
  title: string;
  href: string;
  icon?: keyof typeof Icons;
  description?: string;
}

export interface MenuItemWithChildren extends MenuItem {
  items: MenuItem[];
}

export type SidebarMenuItem = MenuItemWithChildren & Required<Pick<MenuItemWithChildren, 'href'>>;
