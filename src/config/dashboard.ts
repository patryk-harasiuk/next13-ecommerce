import { SidebarMenuItem } from '@/types/menu';

export type DashboardConfig = {
  sidebarNav: SidebarMenuItem[];
};

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: 'Account',
      href: '/dashboard/account',
      icon: 'user',
      items: [],
    },
    {
      title: 'Purchases',
      href: '/dashboard/purchases',
      icon: 'dollarSign',
      items: [],
    },
  ],
};
