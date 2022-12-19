import Link from 'next/link';
import Image from 'next/image';
import { Product } from 'types';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const { image, price, name } = product;

  return (
    <article className="w-[26.25rem] h-[17.5rem] flex flex-col gap-3 text-xl font-normal">
      <Link href="/">
        <div className="flex flex-col gap-4">
          <Image src={image} alt="product" width="480" height="280" />

          <p>{name}</p>
        </div>
      </Link>
      <p className="cursor-none pointer-events-none">{price} PLN</p>
    </article>
  );
};

export default ProductCard;
