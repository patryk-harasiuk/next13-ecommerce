import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return <header className="flex flex-col justify-between align-baseline">{children}</header>;
};

export default Header;
