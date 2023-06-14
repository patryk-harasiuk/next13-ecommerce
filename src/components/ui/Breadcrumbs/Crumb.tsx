import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href: string;
  isCurrentPage?: boolean;
};

const Crumb = ({ children, href, isCurrentPage }: Props) => (
  <li className="font-500 inline text-sm text-gray-500 [&:not(:first-of-type)]:ml-2 [&:not(:first-of-type)]:before:mr-2 [&:not(:first-of-type)]:before:content-['/']">
    <Link href={href} passHref className="text-inherit" legacyBehavior>
      <a
        aria-current={isCurrentPage ? 'page' : undefined}
        className="[text-decoration:none] hover:[text-decoration:underline]"
      >
        {children}
      </a>
    </Link>
  </li>
);

export default Crumb;
