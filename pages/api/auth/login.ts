import type { NextApiRequest, NextApiResponse } from 'next';
import * as z from 'zod';
import { createCookiePair } from 'utils';
import { login } from 'lib';

const UserLoginData = z.object({
  email: z.string(),
  password: z.string(),
});

type UserLoginData = z.TypeOf<typeof UserLoginData>;

export default async function signin(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body } = req;

    const userLoginSchema = UserLoginData.safeParse(body);

    if (!userLoginSchema.success) {
      return res.status(400).json({ message: 'Some field needs correction...' });
    }

    const { email, password } = userLoginSchema.data;

    const { accessToken, refreshToken } = await login(email, password);

    const { accessTokenCookie, refreshTokenCookie } = createCookiePair(accessToken, refreshToken);

    res.setHeader('set-cookie', [accessTokenCookie, refreshTokenCookie]);
    res.status(200).json('Logged in');
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }

    res.status(400).json({ message: 'Could not log in' });
  }
}
