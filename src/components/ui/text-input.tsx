import { UseFormRegisterReturn } from 'react-hook-form';

import type { SanitizedFieldWrapperProps } from './field-wrapper';
import FieldWrapper from './field-wrapper';

type Props = SanitizedFieldWrapperProps & {
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
}: Props): JSX.Element => (
  <FieldWrapper label={label} error={error}>
    <input
      type={type}
      placeholder={placeholder}
      {...registration}
      className="block w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-inset  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm sm:leading-6"
    />
  </FieldWrapper>
);

export default TextInput;
