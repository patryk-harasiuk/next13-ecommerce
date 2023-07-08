import { FieldError } from 'react-hook-form';

import ErrorBox from './error-box';

type FieldWrapperProps = Props;

export type Props = {
  children: React.ReactNode;
  label?: string;
  error?: FieldError;
};

export type SanitizedFieldWrapperProps = Omit<Props, 'children'>;

const FieldWrapper = ({ children, label, error }: FieldWrapperProps): JSX.Element => (
  <div className="mb-4">
    <label className="mb-3 block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {label}
    </label>

    {children}
    {error?.message && <ErrorBox>{error.message}</ErrorBox>}
  </div>
);

export default FieldWrapper;
