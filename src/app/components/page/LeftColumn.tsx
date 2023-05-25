import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const LeftColumn = ({ children }: Props) => {
  return <div className="flex basis-[248px] flex-col gap-8">{children}</div>;
};

export default LeftColumn;
