import type { Product } from '@/types';

const MAX_PRODUCTS_LENGTH = 10;

export const createProducts = (id: number): Product => {
  return {
    id: id.toString(),
    description: 'Product description',
    image: 'https://picsum.photos/592/335',
    name: `Product no ${id}`,
    price: '10.99',
  };
};

export const generateProdutsMock = (length: number): Product[] => {
  return Array.from({ length }).map((_, index) => createProducts(index));
};

export const PRODUCTS_MOCK = generateProdutsMock(MAX_PRODUCTS_LENGTH);
