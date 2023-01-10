import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { DATABASE_ERROR_CODES } from 'shared';

export const isUniqueViolationError = (error: any | unknown) =>
  error instanceof PrismaClientKnownRequestError &&
  error.code === DATABASE_ERROR_CODES.UNIQUE_VIOLATION;
