export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Next13 shop',
  description: 'E-commerce built with Next13, NextAuth, shadcnui',
  links: {
    github: 'https://github.com/patryk-harasiuk/next13-ecommerce',
  },
  mainNav: [
    {
      items: {
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
    },
  ],
};
