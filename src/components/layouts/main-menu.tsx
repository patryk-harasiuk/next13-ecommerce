import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';

import { productCategories } from '@/config/products';
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
        <NavigationMenuItem>
          <NavigationMenuTrigger>{productCategories[0].title}</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    href="/"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <Icons.shirt className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">{siteConfig.name}</div>
                    <p className="text0sm leading-tight text-muted-foreground">
                      {siteConfig.description}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <ListItem href="/products">See all products</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {productCategories.map((category, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {category.subcategories.map((subcategory, index) => (
                  <ListItem key={index} title={subcategory.title} href={subcategory.slug}>
                    {subcategory.description}
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
