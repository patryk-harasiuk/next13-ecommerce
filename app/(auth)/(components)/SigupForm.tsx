import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import TextInput from '@/components/form/TextInput';

type SignupInputs = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

type SignupFormProps = {
  onSubmit: () => void;
};

const schema = z
  .object({
    email: z.string().min(1, 'Email is required'),
    name: z.string().min(1, 'Name is required'),
    password: z.string().min(8, 'Password is required'),
    confirmPassword: z.string().min(8, 'Password is required'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords does not match',
      });
    }
  });

const SignupForm = ({ onSubmit }: SignupFormProps): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupInputs>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput type="text" registration={register('name')} label="Name" error={errors.name} />

      <TextInput type="text" registration={register('email')} label="Email" error={errors.email} />

      <TextInput
        type="text"
        registration={register('password')}
        label="Password"
        error={errors.password}
      />

      <TextInput
        type="text"
        registration={register('confirmPassword')}
        label="Confirm password"
        error={errors.confirmPassword}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
