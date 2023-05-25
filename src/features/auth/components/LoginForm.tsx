'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

import PrimaryButton from '@/components/Buttons/PrimaryButton';
import ErrorBox from '@/components/Form/ErrorBox';
import TextInput from '@/components/Form/TextInput';

// import { login } from '../api/login';

type LoginInputs = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(8, 'Password is required'),
});

const LoginForm = (): JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState<string>('');

  const returnUrlParam = searchParams.get('return_url');

  const returnUrl = returnUrlParam ?? '/';

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: LoginInputs) => {
    try {
      setError('');

      //   await login(values);

      router.push(returnUrl);
    } catch {
      //   if (error instanceof AxiosError) return setError(error.message);

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
      <TextInput type="text" registration={register('email')} label="Email" error={errors.email} />

      <TextInput
        type="password"
        registration={register('password')}
        label="Password"
        error={errors.password}
      />

      <PrimaryButton type="submit">Sign in</PrimaryButton>

      {error && <ErrorBox>{error}</ErrorBox>}

      <p className="mt-6 text-center text-sm text-gray-600">
        Don&apos;t have an account yet?
        <Link className="ml-1 font-bold text-indigo-600" href="/auth/register">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
