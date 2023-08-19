import Link from 'next/link';

import { siteConfig } from '@/config/site';

import { Icons } from '../icon';
import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

const MainMenu = () => (
  <div className="hidden gap-6 lg:flex">
    <Link aria-label="Home" href="/" className="hidden items-center space-x-2 lg:flex">
      <Icons.shirt className="h-6 w-6" aria-hidden="true" />
      <span className="hidden font-bold lg:inline-block">{siteConfig.name}</span>
    </Link>
    <NavigationMenu>
      <NavigationMenuList>
        {siteConfig.mainNav.map((category, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {category.items.map((item, index) => (
                  <ListItem key={index} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

export default MainMenu;
