import { slugify } from '@/utils/slugify';

import { productCategories } from './products';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Next13 shop',
  description: 'E-commerce built with Next13, NextAuth, shadcnui',
  links: {
    github: 'https://github.com/patryk-harasiuk/next13-ecommerce',
  },
  mainNav: [
    {
      title: 'Lobby',
      items: [
        {
          title: 'Products',
          href: '/products',
          description: 'All of our products',
          items: [],
        },
      ],
    },
    ...productCategories.map((category) => ({
      title: category.title,
      items: category.subcategories.map((subcategory) => ({
        title: subcategory.title,
        href: `/categories/${slugify(category.title)}/${subcategory.slug}`,
        description: subcategory.description,
        items: [],
      })),
    })),
  ],
};
