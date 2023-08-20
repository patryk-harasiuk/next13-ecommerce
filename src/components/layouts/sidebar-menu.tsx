import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { SidebarMenuItem } from '@/types/menu';

import { Icons } from '../icon';

type Props = {
  items: SidebarMenuItem[];
};

const SidebarMenu = ({ items }: Props) => {
  const pathname = usePathname();

  if (!items?.length) return null;

  return (
    <div className="flex w-full flex-col gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon ?? 'chevronLeft'];

        return (
          <Link href={item.href} key={index}>
            <span
              className={cn(
                'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground',
                pathname === item.href
                  ? 'bg-muted font-medium text-foreground'
                  : 'text-muted-foreground',
              )}
            >
              <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>{item.title}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarMenu;
