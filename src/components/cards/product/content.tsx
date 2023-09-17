import { Product } from '@prisma/client';
import Link from 'next/link';

import { CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { formatPrice } from '@/utils/format-price';

type Props = {
  productName: Product['name'];
  productId: Product['id'];
  productPrice: Product['price'];
};

const Content = ({ productId, productName, productPrice }: Props) => {
  return (
    <Link aria-label={`View ${productName} details`} href={`/product/${productId}`}>
      <CardContent className="grid gap-2.5 p-4">
        <CardTitle className="line-clamp-1">{productName}</CardTitle>
        <CardDescription className="line-clamp-2">
          {/* I get the error that it has Decimal type, but its actually string in runtime */}
          {formatPrice(productPrice as unknown as string)}
        </CardDescription>
      </CardContent>
    </Link>
  );
};
export default Content;
