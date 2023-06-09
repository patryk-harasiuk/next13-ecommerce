import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library.js';

const PRISMA_ERROR_CODES = {
  NOT_FOUND: 'P2001',
  UNIQUE_VIOLATION: 'P2002',
} as const;

export const isNotFoundError = (error: unknown) =>
  error instanceof PrismaClientKnownRequestError && error.code === PRISMA_ERROR_CODES.NOT_FOUND;

export const isAlreadyInDBError = (error: unknown) =>
  error instanceof PrismaClientKnownRequestError &&
  error.code === PRISMA_ERROR_CODES.UNIQUE_VIOLATION;
