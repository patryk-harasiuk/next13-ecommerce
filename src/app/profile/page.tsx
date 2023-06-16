import { User } from '@prisma/client';
import { notFound, redirect } from 'next/navigation';

import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma-client';
import { getCurrentUser } from '@/lib/session';

async function getProfile(id: User['id']) {
  const user = await prisma.user.findUnique({
    where: { id },
    select: { createdAt: true, email: true, name: true },
  });

  return user;
}

export async function Profile() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login');
  }

  const userData = await getProfile(user.id);

  if (!userData) {
    notFound();
  }

  return (
    <>
      <div>User Profile</div>
      <p>Email: {userData.email}</p>
      <p>Name: {userData.name}</p>
      {/* parse date here */}
      {/* <p>Created at: {userData.createdAt}</p> */}
    </>
  );
}

export default Profile;
