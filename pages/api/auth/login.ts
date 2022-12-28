import type { NextApiRequest, NextApiResponse } from 'next';
import * as z from 'zod';
import prisma from '@/utils/client';
import * as bcrypt from 'bcrypt';
import { decodeToken, generateAccessToken } from 'lib';

const UserLoginData = z.object({
  email: z.string(),
  password: z.string(),
});

type UserLoginData = z.TypeOf<typeof UserLoginData>;

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = generateAccessToken('1');

    // const { body } = req;

    // const { success } = UserLoginData.safeParse(body);

    // if (!success) {
    //   return res.status(400).json({ message: 'Some field needs correction...' });
    // }

    // const foundUser = await prisma.user.findUnique({
    //   where: {
    //     email: body.email,
    //   },
    // });

    // if (foundUser) {
    //   await bcrypt.compare(body.password, foundUser.password);
    // } else {
    //   res.status(400).json('Invalid credentials');
    // }

    // // token logic here

    res.status(200).json('Logged in');
  } catch (error) {
    res.status(400).json({ message: 'Could not log in' });
  }
}
