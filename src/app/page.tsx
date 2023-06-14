'use client';

import { PRODUCTS_MOCK } from '@/components/ProductCard/utils/test/queryProducts.mock';

import Header from './components/page/Header';
import LeftColumn from './components/page/LeftColumn';
import MainColumn from './components/page/MainColumn';
import ProductBreadcrumbs from './components/page/ProductBreadcrumbs';
import ProductsGrid from './components/page/ProductsGrid';
import ProductsSidebar from './components/page/ProductsSidebar';

export default function Home() {
  const prodcuts = PRODUCTS_MOCK;

  return (
    <div className="flex flex-row-reverse gap-8 align-baseline">
      <MainColumn>
        <Header>
          <div className="block md:[display:none]">
            <ProductBreadcrumbs />
          </div>
          <h2 className="text-2xl font-medium">Shirts</h2>
        </Header>

        <ProductsGrid products={prodcuts} />
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
