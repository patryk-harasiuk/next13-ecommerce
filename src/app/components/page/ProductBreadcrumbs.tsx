import Breadcrumbs, { Crumb } from '@/components/ui/breadcrumbs';

const ProductBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      <Crumb href="/">Home</Crumb>
      <Crumb href="/sale">Sale</Crumb>
      <Crumb href="/sale/shirts" isCurrentPage>
        Shirts
      </Crumb>
    </Breadcrumbs>
  );
};

export default ProductBreadcrumbs;
