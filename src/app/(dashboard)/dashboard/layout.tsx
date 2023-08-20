import { User } from '@prisma/client';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import SidebarMenu from '@/components/layouts/sidebar-menu';
import SiteFooter from '@/components/layouts/site-footer';
import SiteHeader from '@/components/layouts/site-header';
import { ScrollArea } from '@/components/ui/scroll-area';
import { dashboardConfig } from '@/config/dashboard';
import { authOptions } from '@/lib/auth';
import db from '@/lib/prisma-client';
import { getCurrentUser } from '@/lib/session';

interface DashboardLayoutProps {
  children: ReactNode;
}

async function getProfile(id: User['id']) {
  const user = await db.user.findUnique({
    where: { id },
    select: { createdAt: true, email: true, name: true },
  });

  return user;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const session = await getCurrentUser();

  if (!session) redirect(authOptions?.pages?.signIn || '/login');

  const user = await getProfile(session.id);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader user={user} />

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="py-6 pr-6 lg:py-8">
            <SidebarMenu items={dashboardConfig.sidebarNav} />
          </ScrollArea>
        </aside>

        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
}
