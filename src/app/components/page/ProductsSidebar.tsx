import Link from 'next/link';

const ProductsSidebar = () => {
  return (
    <aside>
      <div className="flex w-fit flex-col gap-y-4">
        <Link href="/">Basic</Link>
        <Link href="/">Black series</Link>
        <Link href="/">Old drop</Link>
      </div>
    </aside>
  );
};

export default ProductsSidebar;
