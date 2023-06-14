import { FieldError } from 'react-hook-form';

export type FieldWrapperType = {
  children: React.ReactNode;
  label?: string;
  error?: FieldError;
};

export type SanitizedFieldWrapperProps = Omit<FieldWrapperType, 'children'>;
