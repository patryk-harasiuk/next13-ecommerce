import './globals.css';
import Footer from './(components)/Footer';
import Navbar from './(components)/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />

      <body className="font-sans">
        <Navbar />

        <main className="overflow-x-clip min-h-full min-w-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
