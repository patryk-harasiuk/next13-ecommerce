'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as z from 'zod';

import PrimaryButton from '@/components/ui/Buttons/PrimaryButton';
import ErrorBox from '@/components/ui/Form/ErrorBox';
import TextInput from '@/components/ui/Form/TextInput';

type LoginInputs = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string({ required_error: 'Email is required' }).min(1, 'Email is too short'),
  password: z.string({ required_error: 'Password is required' }).min(8, 'Password is too short'),
});

const LoginForm = (): JSX.Element => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string>('');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: LoginInputs) => {
    console.log(values, 'values');
    try {
      setError('');

      const signInResult = await signIn('credentials', {
        redirect: false,
        callbackUrl: searchParams?.get('from') || '/',
        ...values,
      });

      if (signInResult?.error === 'CredentialsSignin')
        return setError('Email or password is wrong');

      router.push('/');
    } catch {
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
        <Link className="ml-1 font-bold text-indigo-600" href="/register">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
