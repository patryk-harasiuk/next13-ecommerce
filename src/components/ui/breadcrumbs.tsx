import Link from 'next/link';
import { ReactNode } from 'react';

type CrumbProps = {
  children: ReactNode;
  href: string;
  isCurrentPage?: boolean;
};

export const Crumb = ({ children, href, isCurrentPage }: CrumbProps) => (
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

type BreadcrumbsProps = {
  children: ReactNode;
};

const Breadcrumbs = ({ children }: BreadcrumbsProps) => (
  <nav aria-label="Breadcrumb">
    <ol className="list-none">{children}</ol>
  </nav>
);

export default Breadcrumbs;
