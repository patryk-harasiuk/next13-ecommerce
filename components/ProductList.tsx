import { Product } from 'types';
import ProductCard from './ProductCard';

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps): JSX.Element => {
  return (
    <ul className="flex gap-7">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
