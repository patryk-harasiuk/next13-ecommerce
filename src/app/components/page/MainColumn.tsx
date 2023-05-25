import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const MainColumn = ({ children }: Props) => {
  return <div className="flex flex-1 flex-col gap-y-8">{children}</div>;
};

export default MainColumn;
