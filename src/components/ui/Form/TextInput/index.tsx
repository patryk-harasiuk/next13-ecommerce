import { UseFormRegisterReturn } from 'react-hook-form';

import FieldWrapper from '../FieldWrapper';
import type { SanitizedFieldWrapperProps } from '../types';

type TextInputProps = SanitizedFieldWrapperProps & {
  type: 'text' | 'password' | 'email';
  registration: Partial<UseFormRegisterReturn>;
  placeholder?: string;
};

const TextInput = ({
  type = 'text',
  label,
  placeholder,
  registration,
  error,
}: TextInputProps): JSX.Element => (
  <FieldWrapper label={label} error={error}>
    <input
      type={type}
      placeholder={placeholder}
      {...registration}
      className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </FieldWrapper>
);

export default TextInput;
