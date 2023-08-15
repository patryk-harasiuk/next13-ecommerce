import { AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import Link from 'next/link';
import { useState } from 'react';

import { productCategories } from '@/config/products';
import { siteConfig } from '@/config/site';

import { Icons } from '../icon';
import { Accordion } from '../ui/accordion';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const MobileMenu = () => {
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

      <SheetContent side="left" className="pl-1 pr-0">
        <div className="px-7">
          <Link
            aria-label="Home"
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Icons.shirt className="mr-2 h-4 w-4" aria-hidden="true" />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
        </div>

        <ScrollArea>
          <div className="pl-1 pr-7">
            <Accordion type="single" collapsible className="w-full">
              {productCategories.map((item, index) => (
                <AccordionItem value={item.title} key={index}>
                  <AccordionTrigger className="text-sm capitalize">{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {item.subcategories.map((subcategory, index) => (
                        <div key={index} className="text-foreground/70 transition-colors">
                          {item.title}
                        </div>
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

// {mainNavItems?.map((item, index) => (
//   <AccordionItem value={item.title} key={index}>
//     <AccordionTrigger className="text-sm capitalize">
//       {item.title}
//     </AccordionTrigger>
//     <AccordionContent>
//       <div className="flex flex-col space-y-2">
//         {item.items?.map((subItem, index) =>
//           subItem.href ? (
//             <MobileLink
//               key={index}
//               href={String(subItem.href)}
//               pathname={pathname}
//               setIsOpen={setIsOpen}
//               disabled={subItem.disabled}
//             >
//               {subItem.title}
//             </MobileLink>
//           ) : (
//             <div
//               key={index}
//               className="text-foreground/70 transition-colors"
//             >
//               {item.title}
//             </div>
//           )
//         )}
//       </div>
//     </AccordionContent>
//   </AccordionItem>
// ))}
