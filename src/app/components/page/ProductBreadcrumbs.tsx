import Breadcrumbs from '@/components/Breadcrumbs';
import Crumb from '@/components/Breadcrumbs/Crumb';

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
