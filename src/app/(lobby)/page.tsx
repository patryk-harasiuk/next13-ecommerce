import { Header } from '@/components/header';
import Hero from '@/components/hero';
import Shell from '@/components/shell';
import { productCategories } from '@/config/products';
import db from '@/lib/prisma-client';

export async function IndexPage() {
  const allProducts = await db.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 8,
  });

  return (
    <Shell className="gap-y-12">
      <section className="flex flex-col gap-y-4">
        <Hero />
        <Header
          className="place-items-center text-center"
          title="Buy best clothing pieces"
          description="We have a wide range of products to suit your needs"
        />
      </section>

      <section className="space-y-6 py-6 md:pt-10 lg:pt-24">
        <div className="flex w-full flex-col items-center gap-y-4 space-y-4 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Categories</h2>

          <p className="text-base text-muted-foreground sm:text-lg sm:leading-7">
            See our categories
          </p>
        </div>

        <div className="sm-grid-cols-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* {productCategories} */}
        </div>
      </section>
    </Shell>
  );
}

export default IndexPage;
