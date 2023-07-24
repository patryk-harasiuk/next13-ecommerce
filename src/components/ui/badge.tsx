import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
};

const Badge = ({ children, className }: Props) => (
  <div
    className={cn(
      `inline-flex items-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`,
    )}
  >
    {children}
  </div>
);

export default Badge;
