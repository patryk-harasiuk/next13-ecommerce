import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma-client';
import { HTTPCode } from '@/types/http';

export async function GET() {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json(products, { status: HTTPCode.OK });
  } catch {
    return NextResponse.json(null, { status: HTTPCode.INTERNAL_SERVER_ERROR });
  }
}
