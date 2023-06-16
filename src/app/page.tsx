'use client';

import { notFound } from 'next/navigation';

import prisma from '@/lib/prisma-client';

import Header from './components/page/Header';
import LeftColumn from './components/page/LeftColumn';
import MainColumn from './components/page/MainColumn';
import ProductBreadcrumbs from './components/page/ProductBreadcrumbs';
import ProductsGrid from './components/page/ProductsGrid';
import ProductsSidebar from './components/page/ProductsSidebar';

async function getProducts() {
  const products = await prisma.product.findMany();

  return products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex flex-row-reverse gap-8 align-baseline">
      <MainColumn>
        <Header>
          <div className="block md:[display:none]">
            <ProductBreadcrumbs />
          </div>
          <h2 className="text-2xl font-medium">Shirts</h2>
        </Header>
        {/* @ts-expect-error Server Component */}
        <ProductsGrid products={products} />
      </MainColumn>
      <LeftColumn>
        <div className="[display:none] md:block">
          <ProductBreadcrumbs />
        </div>

        <ProductsSidebar />
      </LeftColumn>
    </div>
  );
}
