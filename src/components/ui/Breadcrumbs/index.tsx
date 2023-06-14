import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Breadcrumbs = ({ children }: Props) => (
  <nav aria-label="Breadcrumb">
    <ol className="list-none">{children}</ol>
  </nav>
);

export default Breadcrumbs;
