import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma-client';
import { HTTPCode } from '@/types/http';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json('Unauthorized', { status: HTTPCode.UNAUTHORIZED });
    }

    const {
      user: { id },
    } = session;

    const user = await prisma.user.findUnique({
      where: { id },
      select: { createdAt: true, email: true, name: true },
    });

    return NextResponse.json(user, { status: HTTPCode.OK });
  } catch {
    return NextResponse.json(null, { status: HTTPCode.INTERNAL_SERVER_ERROR });
  }
}
