import { UseFormRegisterReturn } from 'react-hook-form';
import FieldWrapper from './FieldWrapper';
import { SanitizedFieldWrapperProps } from './types';

type TextInputProps = SanitizedFieldWrapperProps & {
  type: 'text' | 'password' | 'email';
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
};

const TextInput = ({
  type = 'text',
  label,
  placeholder,
  registration,
  error,
}: TextInputProps): JSX.Element => {
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </FieldWrapper>
  );
};

export default TextInput;
