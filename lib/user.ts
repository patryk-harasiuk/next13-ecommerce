import prisma from '@/utils/client';

export const findUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    throw new Error('Could not find user');
  }
};
