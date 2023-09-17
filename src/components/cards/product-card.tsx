'use client';

import { Product } from '@prisma/client';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import Link from 'next/link';
import { useTransition } from 'react';

import { cn } from '@/lib/utils';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type Props = {
  product: Product;
  className?: string;
};

const ProductCard = ({ product, className }: Props) => {
  const [isPending, setTransition] = useTransition();

  return (
    <Card className={cn('h-full overflow-hidden rounded-sm', className)}>
      <Link aria-label={`View ${product.name} details`} href={`/product/${product.id}`}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={'/assets/images/product-placeholder.webp'}
              alt={product.name}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>
      </Link>
      <Link aria-label={`View ${product.name} details`} href={`/product/${product.id}`}>
        <CardContent className="grid gap-2.5 p-4">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
