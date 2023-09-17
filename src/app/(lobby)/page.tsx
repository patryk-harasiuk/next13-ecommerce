import Image from 'next/image';
import Link from 'next/link';

import ProductCard from '@/components/cards/product';
import { Header } from '@/components/header';
import Hero from '@/components/hero';
import Shell from '@/components/shell';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { buttonVariants } from '@/components/ui/button';
import { productCategories } from '@/config/products';
import db from '@/lib/prisma-client';
import { cn } from '@/lib/utils';

export async function IndexPage() {
  const lastProducts = await db.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 8,
  });

  console.log(lastProducts, 'prods');

  return (
    <Shell layout="default" className="gap-y-12">
      <section id="hero" className="flex flex-col gap-y-4">
        <Hero />
        <Header
          className="place-items-center text-center"
          title="Buy best clothing pieces"
          description="We have a wide range of products to suit your needs"
        />
      </section>

      <section id="categories" className="space-y-6 py-6 md:pt-10 lg:pt-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-y-4 space-y-4 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Categories</h2>

          <p className="text-base text-muted-foreground sm:text-lg sm:leading-7">
            See our categories
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productCategories.map((category) => (
            <Link
              aria-label={`Go to ${category.title}`}
              key={category.title}
              href={`/categories/${category.title}`}
            >
              <div className="group relative overflow-hidden rounded-md">
                <AspectRatio ratio={4 / 5}>
                  <div className="absolute inset-0 z-10 bg-black/60 transition-colors group-hover:bg-black/70" />
                  <Image
                    src={category.image ?? '/assets/images/product-placeholder.webp'}
                    alt={category.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <h3 className="text-3xl font-medium capitalize text-slate-100 md:text-2xl">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="last products" className="space-y-6">
        <div className="flex items-center">
          <h2 className="flex-1 text-2xl font-medium sm:text-3xl">Last products</h2>
          <Link aria-label="Products" href="/products">
            <div className={cn(buttonVariants({ size: 'sm' }))}>View all</div>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {lastProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Shell>
  );
}

export default IndexPage;
