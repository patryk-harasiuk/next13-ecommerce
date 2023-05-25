import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

type Props = {
  products: Product[] | undefined;
};

const ProductsGrid = ({ products }: Props) => {
  if (!products) return <div>No products</div>;

  return (
    <div className="flex flex-wrap gap-8">
      {products.map((product) => {
        return (
          <div key={product.id} className="min-w-[275px] flex-1">
            <ProductCard {...product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
