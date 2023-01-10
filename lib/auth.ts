import {
  decodeTokenPayload,
  decodeToken,
  createTokenPair,
  getDecodedTokenPayloadData,
  comparePasswords,
} from 'utils';
import prisma from '@/utils/client';
import { TOKENS } from 'const';
import { findUserByEmail } from './user';
import { isJWTPayload } from '../utils';

export const login = async (email: string, password: string) => {
  const foundUser = await findUserByEmail(email);

  if (!foundUser) throw new Error('Could not find user');

  if (!comparePasswords(foundUser.password, password)) {
    throw new Error('Provided credentials are invalid');
  }

  const { accessToken, refreshToken } = await createTokenPair(foundUser.id);

  const payload = decodeToken(refreshToken, TOKENS.REFRESH)['payload'];

  if (!isJWTPayload(payload)) {
    throw new Error('Invalid refresh token');
  }

  const jti = getDecodedTokenPayloadData(payload)['jti'];

  await prisma.refreshToken.create({
    data: {
      userId: foundUser.id,
      jti,
    },
  });

  return { accessToken, refreshToken };
};

export const refreshTokenPair = async (currentRefreshToken: string) => {
  const payload = decodeTokenPayload(currentRefreshToken, TOKENS.REFRESH);

  const tokenPayload = getDecodedTokenPayloadData(payload);

  const tokenPair = await createTokenPair(tokenPayload['sub']);

  await prisma.refreshToken.delete({
    where: {
      jti: tokenPayload['jti'],
    },
  });

  const newPayload = decodeTokenPayload(tokenPair.refreshToken, TOKENS.REFRESH);

  await prisma.refreshToken.create({
    data: {
      userId: tokenPayload['sub'],
      jti: getDecodedTokenPayloadData(newPayload)['jti'],
    },
  });

  return tokenPair;
};
