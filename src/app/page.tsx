'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function Home() {
  return <button onClick={() => signIn('credentials')}>SIGNIN</button>;
}
