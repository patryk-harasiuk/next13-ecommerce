'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import TextInput from '@/components/form/TextInput';

type SigninInputs = {
  email: string;
  password: string;
};

type SigninFormProps = {
  onSubmit: () => void;
};

const schema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(8, 'Password is required'),
});

const SigninForm = ({ onSubmit }: SigninFormProps): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SigninInputs>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <TextInput type="text" registration={register('email')} label="Email" error={errors.email} />

      <TextInput
        type="text"
        registration={register('password')}
        label="Password"
        error={errors.password}
      />

      <button
        type="submit"
        className="border border-light-green bg-light-green text-white text-lg rounded-2xl px-8 py-3 transition duration-500 ease"
      >
        Submit
      </button>
    </form>
  );
};

export default SigninForm;
