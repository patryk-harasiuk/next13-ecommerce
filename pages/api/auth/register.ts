import type { NextApiRequest, NextApiResponse } from 'next';
import * as z from 'zod';
import prisma from '@/utils/client';
import { createHash } from '@/utils/create-hash';
import { DATABASE_ERROR_CODES } from 'shared';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

const UserRegisterData = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

type UserRegisterData = z.TypeOf<typeof UserRegisterData>;

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body } = req;

    const userRegisterSchema = UserRegisterData.safeParse(body);

    if (!userRegisterSchema.success) {
      return res.status(400).json({ message: 'Some field needs correction...' });
    }

    const { password } = userRegisterSchema.data;

    const hashedPassword = await createHash(password);

    const createdUser = await prisma.user.create({
      data: { ...body, password: hashedPassword },
    });

    res.status(200).json(createdUser);
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === DATABASE_ERROR_CODES.UNIQUE_VIOLATION
    ) {
      return res.status(400).json({ message: 'User with that email already exists' });
    }

    res.status(400).json({ message: 'Could not create user' });
  }
}
