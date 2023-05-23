/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { Product } from '@/types';

type Props = Product;

const ProductCard = ({ id, image, name, price, description }: Props) => (
  <Link href={`/product/${id}`}>
    <article className="group relative">
      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt=""
          src={`/assets/images/products${image}`}
          className="h-full w-full rounded-b-[4px] object-cover object-center lg:h-full lg:w-full"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-700">{name}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price} $</p>
      </div>
    </article>
  </Link>
);

export default ProductCard;
