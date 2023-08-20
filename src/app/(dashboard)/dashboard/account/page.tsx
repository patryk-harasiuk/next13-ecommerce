import { User } from '@prisma/client';
import { redirect } from 'next/navigation';

import { authOptions } from '@/lib/auth';
import db from '@/lib/prisma-client';
import { getCurrentUser } from '@/lib/session';

async function getProfile(id: User['id']) {
  const user = await db.user.findUnique({
    where: { id },
    select: { createdAt: true, email: true, name: true },
  });

  return user;
}

export default async function Account() {
  const session = await getCurrentUser();

  if (!session) redirect(authOptions?.pages?.signIn || '/login');

  const user = await getProfile(session.id);

  return <div>account</div>;
}
