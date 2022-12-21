import HamburgerMenu from '@/components/HamburgerMenu';
import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '@/public/assets/icons/search.svg';
import CartIcon from '@/public/assets/icons/cart.svg';
import UserIcon from '@/public/assets/icons/user.svg';

const Navbar = (): JSX.Element => (
  <header className="navbar sticky top-0 left-0 z-50 bg-white h-20 w-full flex items-start lg:items-center justify-between py-4 px-5 border-b border-black">
    <div className="dropdown lg:hidden">
      <label tabIndex={0} className="lg:hidden">
        <HamburgerMenu />
      </label>

      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href="/">Product 1</Link>
        </li>

        <li>
          <Link href="/">Product 2</Link>
        </li>
      </ul>
    </div>

    <div className="flex flex-col lg:flex-row gap-4">
      <h1 className="text-emerald-500 font-bold text-2xl lg:text-3xl italic leading-none text-center">
        Yee<span className="text-green-300 font-bold italic">Shirts</span>
      </h1>

      <div className="flex gap-5 lg:gap-10 text-xs lg:text-lg lg:pl-10">
        <Link href="/">Product 1</Link>
        <Link href="/">Product 2</Link>
      </div>
    </div>

    <nav>
      <ul className="flex gap-4">
        <li className="cursor-pointer">
          <Link href="/signin">
            <Image alt="user" src={UserIcon} width="20" height="20" />
          </Link>
        </li>

        <li className="cursor-pointer">
          <Image alt="cart" src={CartIcon} />
        </li>

        <li className="cursor-pointer">
          <Image alt="search" src={SearchIcon} />
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
