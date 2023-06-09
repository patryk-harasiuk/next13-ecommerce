import { NextResponse } from 'next/server';
import * as z from 'zod';

import { isAlreadyInDBError } from '@/errors/is-not-found-error';
import prisma from '@/lib/prisma-client';
import { HTTPCode } from '@/types/http';

const registerUserSchema = z.object({
  email: z.string().min(1).email(),
  name: z.string().min(1),
  password: z.string().min(8),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, name, password } = registerUserSchema.parse(body);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.issues, { status: HTTPCode.UNPROCESSABLE_ENTITY });
    }

    if (isAlreadyInDBError(error)) {
      return NextResponse.json('User already exists', { status: HTTPCode.BAD_REQUEST });
    }

    return NextResponse.json(null, { status: HTTPCode.INTERNAL_SERVER_ERROR });
  }
}
