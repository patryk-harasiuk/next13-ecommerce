import { Product } from '@prisma/client';
import Link from 'next/link';
import { useTransition } from 'react';

import { Icons } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';

type Props = {
  productId: Product['id'];
};

const Footer = ({ productId }: Props) => {
  const [isPending, setTransition] = useTransition();

  return (
    <CardFooter className="p-4">
      <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <Link
          aria-label="Preview product"
          href={`/product-preview/${productId}`}
          className={buttonVariants({
            variant: 'outline',
            size: 'sm',
            className: 'h-8 w-full rounded-sm',
          })}
        >
          Preview
        </Link>
        <Button
          aria-label="Add to cart"
          size="sm"
          className="h-8 w-full rounded-sm"
          onClick={() => {
            setTransition(async () => {
              try {
                // #TODO: add adding to cart function here
              } catch {
                // #TODO: handle errors, preferably with toasts
              }
            });
          }}
          disabled={isPending}
        >
          {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
          Add to cart
        </Button>
      </div>
    </CardFooter>
  );
};

export default Footer;
