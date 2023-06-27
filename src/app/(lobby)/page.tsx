import db from '@/lib/prisma-client';

export async function IndexPage() {
  const allProducts = await db.product.findMany({
    orderBy: {
      createdAt: 'asc',
    },
    take: 8,
  });

  return <div>elo</div>;
}

export default IndexPage;
