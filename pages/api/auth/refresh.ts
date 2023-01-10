import type { NextApiRequest, NextApiResponse } from 'next';
import * as z from 'zod';
import { decodeToken, generateRefreshToken, createTokenPair } from 'utils';

// const UserLoginData = z.object({
//   email: z.string(),
//   password: z.string(),
// });

// type UserLoginData = z.TypeOf<typeof UserLoginData>;

export default async function refresh(req: NextApiRequest, res: NextApiResponse) {
  try {
    const cookies = req.cookies;

    res.status(200).json('Logged in');
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }

    res.status(400).json({ message: 'Could not refresh tokens' });
  }
}
