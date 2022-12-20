import { UseFormRegisterReturn } from 'react-hook-form';
import FieldWrapper from './FieldWrapper';
import { SanitizedFieldWrapperProps } from './types';

type TextInputProps = SanitizedFieldWrapperProps & {
  type: 'text' | 'password' | 'email';
  registration: Partial<UseFormRegisterReturn>;
};

const TextInput = ({ type = 'text', label, registration, error }: TextInputProps): JSX.Element => {
  return (
    <FieldWrapper label={label} error={error}>
      <input type={type} {...registration} />
    </FieldWrapper>
  );
};

export default TextInput;
