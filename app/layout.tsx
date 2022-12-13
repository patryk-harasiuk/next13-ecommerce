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
        <header className="h-20 w-full flex items-start justify-between py-4 px-5 border-b border-black">
          <HamburgerMenu />

          <div className="flex flex-col gap-4">
            <h1 className="text-emerald-500 font-medium text-xl italic leading-none text-center">
              Yee<span className="text-green-300 font-medium italic">Shirts</span>
            </h1>

            <div className="flex gap-5">
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

        <main>{children}</main>
      </body>
    </html>
  );
}
