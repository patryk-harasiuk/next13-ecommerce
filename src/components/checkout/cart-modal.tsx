import { getCartItemsAction } from '@/app/_actions/cart';
import { Sheet } from 'lucide-react';
import { Icons } from '../icon';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

export async function CartSheet() {
  const cartItems = await getCartItemsAction();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button aria-label="Open cart" variant="outline" size="icon" className="relative">
          {cartItems.length > 0 && (
            <Badge
              variant="secondary"
              className="absolute -right-2 -top-2 h-6 w-6 justify-center rounded-full p-2.5"
            >
              {cartItems.length}
            </Badge>
          )}
          <Icons.shoppingCart className="h-4 w-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart {cartItems.length > 0 && `(${cartItems.length})`}</SheetTitle>
          <Separator />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default CartSheet;
