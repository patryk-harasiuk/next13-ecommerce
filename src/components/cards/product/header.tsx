import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CardHeader } from '@/components/ui/card';

type Props = {
  productName: Product['name'];
  productId: Product['id'];
};

const Header = ({ productId, productName }: Props) => {
  return (
    <Link aria-label={`View ${productName} details`} href={`/product/${productId}`}>
      <CardHeader className="border-b p-0">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={'/assets/images/product-placeholder.webp'}
            alt={productName}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-cover"
            loading="lazy"
          />
        </AspectRatio>
      </CardHeader>
    </Link>
  );
};

export default Header;
