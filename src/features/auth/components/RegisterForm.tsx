'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

import PrimaryButton from '@/components/Buttons/PrimaryButton';
import ErrorBox from '@/components/Form/ErrorBox';
import TextInput from '@/components/Form/TextInput';
import { registerSchema } from '@/lib/validations/auth';
import { fetcher } from '@/utils/fetcher';

type RegisterInputs = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

const schema = z
  .object({
    email: z.string({ required_error: 'Email is required' }).min(1, 'Email is too short'),
    name: z.string({ required_error: 'Name is required' }).min(1, 'Name is too short'),
    password: z.string({ required_error: 'Password is required' }).min(8, 'Password is too short'),
    confirmPassword: z
      .string({ required_error: 'Password is required' })
      .min(8, 'Password is too short'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords do not match',
      });
    }
  });

const RegisterForm = (): JSX.Element => {
  const router = useRouter();
  const [error, setError] = useState<string>('');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: RegisterInputs) => {
    try {
      setError('');

      await fetcher('/auth/register', {
        method: 'POST',
        schema: registerSchema,
        body: values,
      });

      router.push('/login');
    } catch {
      //   if (error instanceof ResponseError) return setError(error.message);

      toast.error('Unexpected error, please try again', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
      className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
    >
      <TextInput type="text" registration={register('name')} label="Name" error={errors.name} />

      <TextInput type="email" registration={register('email')} label="Email" error={errors.email} />

      <TextInput
        type="password"
        registration={register('password')}
        label="Password"
        error={errors.password}
      />

      <TextInput
        type="password"
        registration={register('confirmPassword')}
        label="Confirm password"
        error={errors.confirmPassword}
      />

      <PrimaryButton type="submit">Sign up</PrimaryButton>
      {error && <ErrorBox>{error}</ErrorBox>}

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?
        <Link
          className="ml-1 font-bold text-indigo-600"
          href={{
            pathname: '/auth/login',
            query: null,
          }}
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
