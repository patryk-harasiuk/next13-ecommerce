import { refreshTokenPair } from 'lib';
import * as z from 'zod';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createCookiePair } from '@/utils/jwt';

const TokensSchema = z.object({
  access: z.string(),
  refresh: z.string(),
});

type TokensSchema = z.TypeOf<typeof TokensSchema>;

export default async function refresh(req: NextApiRequest, res: NextApiResponse) {
  try {
    const cookies = req.cookies;

    const tokensSchema = TokensSchema.safeParse(cookies);

    if (!tokensSchema.success) {
      return res.status(400).json({ message: 'Could not find cookies...' });
    }

    const { refresh } = tokensSchema.data;

    const { accessToken, refreshToken } = await refreshTokenPair(refresh);

    const { accessTokenCookie, refreshTokenCookie } = createCookiePair(accessToken, refreshToken);

    res.setHeader('set-cookie', [accessTokenCookie, refreshTokenCookie]);
    res.status(200).json('Successfully refreshed tokens');
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }

    res.status(400).json({ message: 'Could not refresh tokens' });
  }
}
