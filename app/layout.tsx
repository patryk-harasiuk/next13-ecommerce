import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from 'components/HamburgerMenu';
import CartIcon from 'public/assets/icons/cart.svg';
import SearchIcon from 'public/assets/icons/search.svg';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body>
        <header className="navbar h-20 w-full flex items-start justify-between py-4 px-5 border-b border-black">
          {/* <div className="w-5 h-4"> */}
          <div className="dropdown">
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
          {/* </div> */}

          <div className="flex flex-col gap-4">
            <h1 className="text-emerald-500 font-medium text-xl italic leading-none text-center">
              Yee<span className="text-green-300 font-medium italic">Shirts</span>
            </h1>

            <div className="flex gap-5 text-xs">
              <Link href="/">Product 1</Link>
              <Link href="/">Product 2</Link>
            </div>
          </div>

          <nav>
            <ul className="flex gap-[9px]">
              <li>
                <Image alt="cart" src={CartIcon} />
              </li>

              <li>
                <Image alt="search" src={SearchIcon} />
              </li>
            </ul>
          </nav>
        </header>

        <main className="overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
