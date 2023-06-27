import Image from 'next/image';
import { ReactNode } from 'react';

import { siteConfig } from '@/config/site';

import AuthLayoutImage from '../../../public/assets/images/auth-screen.jpg';

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="grid h-full grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
      <div className="aspect-h-9 aspect-w-16">
        <Image
          src={AuthLayoutImage}
          alt="Hanging clothes"
          priority
          fill
          className="absolute inset-0"
        />
        <div className="absolute inset-0" />

        {/* <span>{siteConfig.name}</span> */}
      </div>
      <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
        {children}
      </main>
    </div>
  );
}
