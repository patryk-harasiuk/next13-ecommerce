import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: VoidFunction;
  className?: string;
};

const UnstyledButton = ({ children, onClick, className }: Props) => (
  <button
    onClick={onClick}
    className={`m-0 block cursor-pointer border-none bg-transparent p-0 text-left text-inherit focus:outline-offset-2 focus:[&:not(:focus-visible)]:outline-none ${className}`}
  >
    {children}
  </button>
);

export default UnstyledButton;
