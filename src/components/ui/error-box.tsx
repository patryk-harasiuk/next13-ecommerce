type Props = {
  children: string | null;
};

const ErrorBox = ({ children }: Props) => (
  <div role="alert" className="mt-2 text-center text-xs italic text-red-500">
    {children}
  </div>
);

export default ErrorBox;
