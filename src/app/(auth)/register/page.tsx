import { Metadata } from 'next';
import Image from 'next/image';

import RegisterForm from '@/components/forms/register-form';
import Shell from '@/components/shell';

export const metadata: Metadata = {
  title: 'Create an account',
  description: 'Create an account to get started',
};
const CompanyLogo = '/assets/images/company-logo.svg';

const RegisterPage = () => (
  <Shell layout="auth">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Image width={30} height={10} className="mx-auto" src={CompanyLogo} alt="Company logo" />
      <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign up to your account
      </h2>

      <RegisterForm />
    </div>
  </Shell>
);

export default RegisterPage;
