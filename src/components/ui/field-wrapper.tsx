import { FieldError } from 'react-hook-form';

import ErrorBox from './error-box';

type FieldWrapperProps = FieldWrapperType;

export type FieldWrapperType = {
  children: React.ReactNode;
  label?: string;
  error?: FieldError;
};

export type SanitizedFieldWrapperProps = Omit<FieldWrapperType, 'children'>;

const FieldWrapper = ({ children, label, error }: FieldWrapperProps): JSX.Element => (
  <div className="mb-4">
    <label className="mb-2 block text-sm font-bold text-gray-700">{label}</label>

    {children}
    {error?.message && <ErrorBox>{error.message}</ErrorBox>}
  </div>
);

export default FieldWrapper;
