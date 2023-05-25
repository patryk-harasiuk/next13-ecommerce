import { Product } from '@/types';

type Props = {
  products: Product[];
};

const Products = ({ products }: Props) => (
  <div className="flex flex-row-reverse gap-8 align-baseline"></div>
);

export default Products;
