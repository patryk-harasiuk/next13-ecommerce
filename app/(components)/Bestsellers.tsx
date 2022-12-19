import ProductList from '@/components/ProductList';

const Bestsellers = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-9 py-20 px-[3.75rem]">
      <div className="flex gap-8">
        <h2 className="text-5xl">Bestsellers</h2>

        <button className="py-2 px-7 border border-deep-purple text-sm font-normal text-deep-purple rounded-2xl transition duration-400 ease-in-out hover:border-light-green hover:text-light-green">
          Shop all products
        </button>
      </div>

      <ProductList
        products={[
          {
            id: '1',
            price: '123',
            name: 'Test product 1',
            image: '/../public/assets/images/test.png',
          },
        ]}
      />
    </div>
  );
};

export default Bestsellers;
