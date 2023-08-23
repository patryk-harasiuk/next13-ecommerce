'use client';

import { User } from '@prisma/client';
import Link from 'next/link';

import { Icons } from '../icon';
import { Badge } from '../ui/badge';
import { Button, buttonVariants } from '../ui/button';
import MainMenu from './main-menu';
import MobileMenu from './mobile-menu';

type Props = {
  user: Pick<User, 'email' | 'name'> | null;
};

export function SiteHeader({ user }: Props) {
  return (
    <header className="sticky top-0 z-40 flex h-72 w-full items-center border-b bg-background p-18 md:px-8">
      <div className="container flex h-16 items-center">
        <MobileMenu />
        <MainMenu />

        <div className="flex flex-1 items-center justify-end space-x-4">
          {user ? (
            <Link href="/dashboard/account">
              <Icons.user className="mr-2 h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Go to account</span>
            </Link>
          ) : (
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
          )}

          <Button aria-label="Cart" variant="outline" size="icon" className="relative">
            <Badge className="absolute -right-2 -top-2 h-6 w-6 rounded-full p-2">1</Badge>

            <Icons.shoppingCart className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
