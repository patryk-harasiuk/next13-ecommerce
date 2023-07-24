export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Clothing shop 13',
  description: 'An open source e-commerce skateshop build with everything new in Next.js 13',
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
