import { AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { siteConfig } from '@/config/site';

import { Icons } from '../icon';
import { Accordion } from '../ui/accordion';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import MobileLink from './mobile-link';

const MobileMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <Link
          aria-label="Home"
          href="/"
          className="flex items-center pb-6"
          onClick={() => setIsOpen(false)}
        >
          <Icons.shirt className="mr-2 h-4 w-4" aria-hidden="true" />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>

        <ScrollArea>
          <div className="pl-1">
            <Accordion type="single" collapsible className="flex w-full flex-col gap-y-6">
              {siteConfig.mainNav.map((category, index) => (
                <AccordionItem
                  value={category.title}
                  key={index}
                  className="border-b border-gray-700 pb-2"
                >
                  <AccordionTrigger className="text-sm capitalize">
                    {category.title}
                  </AccordionTrigger>
                  <AccordionContent className="mt-2">
                    <div className="flex flex-col space-y-2">
                      {category.items.map((subItem, index) => (
                        <MobileLink
                          key={index}
                          href={String(subItem.href)}
                          pathname={pathname}
                          setIsOpen={setIsOpen}
                        >
                          {subItem.title}
                        </MobileLink>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
