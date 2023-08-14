'use client';

import { User } from '@prisma/client';
import Link from 'next/link';
import { useState } from 'react';

import { Icons } from '../icon';
import Badge from '../ui/badge';
import { Button, buttonVariants } from '../ui/button';
import MobileMenu from './mobile-menu';

type Props = {
  user: Pick<User, 'email' | 'name'> | null;
};

export function SiteHeader({ user }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky z-40 flex h-72 w-full items-center justify-between border-b bg-background p-18 md:items-baseline md:justify-start md:px-8">
      <div className="flex-[revert] md:flex md:flex-1">
        <Link href="/">
          <h1 className="text-2xl font-extrabold text-gray-800">
            Next13<span className="ml-4">eCommerce</span>
          </h1>
        </Link>
      </div>

      <nav className="font-600 mx-12 hidden gap-12 text-lg text-gray-700 md:flex">
        <ul className="flex gap-4 text-muted-foreground"></ul>
      </nav>

      <div className="flex gap-8 md:hidden">
        {user ? (
          <Link href="/login">
            <div
              className={buttonVariants({
                size: 'sm',
              })}
            >
              Sign In
              <span className="sr-only">Sign In</span>
            </div>
          </Link>
        ) : (
          <Link href="/account">
            <Icons.user className="mr-2 h-4 w-4" aria-hidden="true" /> Account
          </Link>
        )}

        <Button aria-label="Cart" variant="outline" size="icon" className="relative">
          <Badge className="absolute -right-2 -top-2 h-6 w-6 rounded-full p-2">1</Badge>

          <Icons.shoppingCart className="h-4 w-4" aria-hidden="true" />
        </Button>

        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Icons.menu className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
        </Button>
      </div>

      {/* <MobileMenu isOpen={isMobileMenuOpen} onDismiss={() => setIsMobileMenuOpen(false)} /> */}

      <div className="hidden md:flex md:flex-1" />
    </header>
  );
}

export default SiteHeader;
