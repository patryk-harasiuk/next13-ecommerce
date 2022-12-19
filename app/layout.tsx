import { Roboto } from '@next/font/google';
import './globals.css';
import Footer from './(components)/Footer';
import Navbar from './(components)/Navbar';

const roboto = Roboto({
  weight: '400',
  variable: '--font-roboto',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head />

      <body className="font-sans">
        <Navbar />

        <main className="overflow-x-clip">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
