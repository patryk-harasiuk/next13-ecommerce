import ErrorBox from '../ErrorBox';
import type { FieldWrapperType } from '../types';

type FieldWrapperProps = FieldWrapperType;

const FieldWrapper = ({ children, label, error }: FieldWrapperProps): JSX.Element => (
  <div className="mb-4">
    <label className="mb-2 block text-sm font-bold text-gray-700">{label}</label>

    {children}
    {error?.message && <ErrorBox>{error.message}</ErrorBox>}
  </div>
);

export default FieldWrapper;
