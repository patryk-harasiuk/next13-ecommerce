import Link from 'next/link';

import { siteConfig } from '@/config/site';

import { Icons } from '../icon';

const MainMenu = () => (
  <div className="hidden gap-6 lg:flex">
    <Link aria-label="Home" href="/" className="hidden items-center space-x-2 lg:flex">
      <Icons.shirt className="h-6 w-6" aria-hidden="true" />
      <span className="hidden font-bold lg:inline-block">{siteConfig.name}</span>
    </Link>
  </div>
);

export default MainMenu;
