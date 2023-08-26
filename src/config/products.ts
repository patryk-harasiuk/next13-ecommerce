import { Product } from '@prisma/client';

type ProductCategories = {
  title: Product['category'];
  image?: string;
  subcategories: {
    title: string;
    description?: string;
    image?: string;
    slug: string;
  }[];
}[];

export const productCategories: ProductCategories = [
  {
    title: 'clothing',
    image: '/assets/images/category-clothing.webp',
    subcategories: [
      {
        title: 'T-shirts',
        description: 'Comfy tees for effortless style.',
        slug: 't-shirts',
      },
      {
        title: 'Hoodies',
        description: 'Cozy up in trendy hoodies.',
        slug: 'hoodies',
      },
      {
        title: 'Pants',
        description: 'Relaxed and stylish pants for everyday wear.',
        slug: 'pants',
      },
    ],
  },
  {
    title: 'shoes',
    image: '/assets/images/category-shoes.webp',
    subcategories: [
      {
        title: 'Low Tops',
        description: 'Rad low tops shoes for a stylish low-profile look.',
        slug: 'low-tops',
      },
      {
        title: 'High Tops',
        description: 'Elevate your style with rad high top shoes.',
        slug: 'high-tops',
      },
      {
        title: 'Classics',
        description: 'Timeless style with rad classic shoes.',
        slug: 'classics',
      },
    ],
  },
  {
    title: 'accessories',
    image: '/assets/images/category-accessories.webp',
    subcategories: [
      {
        title: 'Socks',
        description: 'Keep your feet comfy and stylish with our rad socks.',
        slug: 'socks',
      },
      {
        title: 'Backpacks',
        description: 'Carry your gear in style with our rad backpacks.',
        slug: 'backpacks',
      },
    ],
  },
];
