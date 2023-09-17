'use client';

import { Product } from '@prisma/client';

import { cn } from '@/lib/utils';

import { Card } from '../../ui/card';
import Content from './content';
import Footer from './footer';
import Header from './header';

type Props = {
  product: Product;
  className?: string;
};

const ProductCard = ({ product, className }: Props) => (
  <Card className={cn('h-full overflow-hidden rounded-sm', className)}>
    <Header productId={product.id} productName={product.name} />

    <Content productId={product.id} productName={product.name} productPrice={product.price} />

    <Footer productId={product.id} />
  </Card>
);

export default ProductCard;
