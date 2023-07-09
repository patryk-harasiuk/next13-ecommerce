import { User } from '@prisma/client';
import { ReactNode } from 'react';

import SiteFooter from '@/components/layouts/site-footer';
import { SiteHeader } from '@/components/layouts/site-header';
import prisma from '@/lib/prisma-client';
import { getCurrentUser } from '@/lib/session';

type Props = {
  children: ReactNode;
};

async function getProfile(id: User['id']) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: { createdAt: true, email: true, name: true },
  });

  return user;
}

export default async function LobbyLayout({ children }: Props) {
  const session = await getCurrentUser();

  const user = session ? await getProfile(session.id) : null;

  return (
    <div className="relative flex min-h-full flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
