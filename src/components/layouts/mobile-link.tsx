import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  children?: React.ReactNode;
  href: string;
  disabled?: boolean;
  pathname: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileLink = ({ children, href, disabled, pathname, setIsOpen }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-foreground/70 transition-colors hover:text-foreground',
        pathname === href && 'text-foreground',
        disabled && 'pointer-events-none opacity-60',
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
};

export default MobileLink;
