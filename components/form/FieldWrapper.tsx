import { FieldWrapperType } from './types';

type FieldWrapperProps = FieldWrapperType;
const FieldWrapper = ({ children, label, error }: FieldWrapperProps): JSX.Element => {
  return (
    <div>
      <label>{label}</label>

      {children}
      {error?.message && <div role="alert">{error.message}</div>}
    </div>
  );
};

export default FieldWrapper;
