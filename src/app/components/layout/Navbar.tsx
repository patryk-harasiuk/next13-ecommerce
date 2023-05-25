'use client';

import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from 'public/assets/icons/menu.svg';
import CartIcon from 'public/assets/icons/shopping-bag.svg';
import UserIcon from 'public/assets/icons/user.svg';
import { useState } from 'react';

import UnstyledButton from '@/components/UnstyledButton';
import VisuallyHidden from '@/components/VisuallyHidden';

import MobileMenu from '../../MobileMenu';

const Navbar = (): JSX.Element => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="flex h-[72px] w-full items-center justify-between border-b border-gray-400 p-[18px] md:items-baseline md:justify-start md:px-8">
      <div className="flex-[revert] md:flex md:flex-1">
        <Link href="/">
          <h1 className="text-2xl font-extrabold text-gray-800">
            Yee<span>Shirts</span>
          </h1>
        </Link>
      </div>

      <nav className="font-600 mx-12 hidden gap-12 text-lg text-gray-700 md:flex">
        <ul className="flex gap-4">
          <li>
            <Link
              href="/sale"
              className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-gray-300"
            >
              Sale
            </Link>
          </li>
          <li>
            <Link
              href="/new"
              className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-gray-300"
            >
              New&nbsp;Releases
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-8 md:hidden">
        <Link href="/account">
          <Image alt="user" src={UserIcon} width="20" height="20" />
        </Link>

        <UnstyledButton>
          <Image alt="cart" src={CartIcon} width="20" height="20" />
          <VisuallyHidden>View Cart</VisuallyHidden>
        </UnstyledButton>

        <UnstyledButton onClick={() => setShowMobileMenu(true)}>
          <Image alt="menu" src={HamburgerMenu} width="20" height="20" />
          <VisuallyHidden>Mobile menu</VisuallyHidden>
        </UnstyledButton>
      </div>

      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />

      <div className="hidden md:flex md:flex-1" />
    </header>
  );
};

export default Navbar;
