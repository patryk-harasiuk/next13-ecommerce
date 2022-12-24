import type { NextApiRequest, NextApiResponse } from 'next';
import * as z from 'zod';
import prisma from '@/utils/client';
import { createHash } from 'crypto';

type RegisterUserDTO = {
  name: string;
  email: string;
  password: string;
};

const UserRegisterData = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

type UserRegisterData = z.TypeOf<typeof UserRegisterData>;

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body } = req;

    const { success } = UserRegisterData.safeParse(body);

    if (!success) {
      return res.status(400);
    }

    const hashedPassword = createHash(body.password);

    const createdUser = await prisma.user.create({
      data: { ...body, hashedPassword },
    });

    res.status(200).json(createdUser);
  } catch (error) {
    res.status(400).json({ message: 'Could not create user' });
  }
}
