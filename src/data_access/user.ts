import { Prisma, PrismaClient, User } from '@prisma/client';

import prisma from '@/lib/prisma-client';

type UserRegisterType = {
  email: string;
  name: string;
  password: string;
};

const userResponse = Prisma.validator<Prisma.UserArgs>()({
  select: { email: true, name: true },
});

type UserResponseType = Prisma.UserGetPayload<typeof userResponse>;

const Users = (prismaUser: PrismaClient['user']) => {
  return Object.assign(prismaUser, {
    async register(data: UserRegisterType): Promise<UserResponseType> {
      return prismaUser.create({ data, select: userResponse['select'] });
    },

    async findByEmail(email: string): Promise<User> {
      const user = await prismaUser.findFirst({
        where: {
          email,
        },
      });

      if (!user) throw new Error(`User with email ${email} does not exist`);

      return user;
    },
  });
};

export const users = Users(prisma.user);
