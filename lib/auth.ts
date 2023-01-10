import * as bcrypt from 'bcrypt';
import { decodeTokenPayload, decodeToken, createTokenPair } from 'utils';
import prisma from '@/utils/client';
import { TOKENS } from 'const';
import { findUserByEmail } from './user';
import { JwtPayload } from 'jsonwebtoken';
import { hasDefinedProperty, isJWTPayload } from '../utils';

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

  const jti = getDecodedTokenPayloadData(payload, 'jti');

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

  const jti = getDecodedTokenPayloadData(payload, 'jti');
  const sub = getDecodedTokenPayloadData(payload, 'sub');

  const { accessToken, refreshToken } = await createTokenPair(sub);

  await prisma.refreshToken.delete({
    where: {
      jti,
    },
  });

  const newPayload = decodeTokenPayload(refreshToken, TOKENS.REFRESH);

  await prisma.refreshToken.create({
    data: {
      userId: sub,
      jti: getDecodedTokenPayloadData(newPayload, 'jti'),
    },
  });
};

const comparePasswords = async (password: string, userPassword: string) => {
  const match = await bcrypt.compare(password, userPassword);

  return match;
};

const getDecodedTokenPayloadData = (payload: JwtPayload, payloadProperty: 'sub' | 'jti') => {
  if (!hasDefinedProperty(payload, payloadProperty)) {
    throw new Error('Invalid token');
  }

  return payload[payloadProperty];
};
