import { Product } from '@prisma/client';

export const productCategories: {
  title: Product['category'];
  subcategories: {
    title: string;
    description?: string;
    image?: string;
    slug: string;
  }[];
}[] = [
  {
    title: 'clothing',
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
