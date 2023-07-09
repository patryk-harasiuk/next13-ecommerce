import { Header } from '@/components/header';
import Hero from '@/components/hero';
import Shell from '@/components/shell';
import db from '@/lib/prisma-client';

export async function IndexPage() {
  const allProducts = await db.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 8,
  });

  return (
    <div>
      <Hero />
      <Shell>
        <Header
          className="place-items-center text-center"
          title="Buy best clothing pieces"
          description="We have a wide range of products to suit your needs"
        />
      </Shell>
    </div>
  );
}

export default IndexPage;
