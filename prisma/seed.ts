/* eslint-disable unicorn/no-process-exit */
import process from 'node:process';

// import Prisma from '@prisma/client';
import { Prisma, PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

const products: Product[] = [
  {
    id: '1',
    description: '',
    name: 'White Tee',
    price: new Prisma.Decimal(500),
    image: '',
    category: 'clothing',
    subcategory: 'Hoodies',
    createdAt: new Date(),
  },

  {
    id: '2',
    description: '',
    name: 'Black Tee',
    price: new Prisma.Decimal(1500),
    image: '',
    category: 'clothing',
    subcategory: 'T-shirts',
    createdAt: new Date(),
  },

  {
    id: '3',
    description: '',
    name: 'White Hoodie',
    price: new Prisma.Decimal(2500),
    image: '',
    category: 'clothing',
    subcategory: 'Hoodies',
    createdAt: new Date(),
  },

  {
    id: '4',
    description: '',
    name: 'Blue Tee',
    price: new Prisma.Decimal(900),
    image: '',
    category: 'clothing',
    subcategory: 'T-shirts',
    createdAt: new Date(),
  },

  {
    id: '5',
    description: '',
    name: 'Black Hoodie',
    price: new Prisma.Decimal(1000),
    image: '',
    category: 'clothing',
    subcategory: 'Hoodies',
    createdAt: new Date(),
  },

  {
    id: '6',
    description: '',
    name: 'Blue Tee',
    price: new Prisma.Decimal(500),
    image: '',
    category: 'clothing',
    subcategory: 'T-shirts',
    createdAt: new Date(),
  },

  {
    id: '7',
    description: '',
    name: 'Red Tee',
    price: new Prisma.Decimal(500),
    image: '',
    category: 'clothing',
    subcategory: 'T-shirts',
    createdAt: new Date(),
  },
];

async function main() {
  await prisma.product.createMany({
    data: products,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
