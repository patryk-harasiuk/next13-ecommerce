import { FieldWrapperType } from './types';

type FieldWrapperProps = FieldWrapperType;

const FieldWrapper = ({ children, label, error }: FieldWrapperProps): JSX.Element => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>

      {children}
      {error?.message && (
        <div role="alert" className="text-red-500 text-xs italic">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default FieldWrapper;
