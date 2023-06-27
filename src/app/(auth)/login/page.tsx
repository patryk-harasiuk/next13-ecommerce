import Image from 'next/image';

import LoginForm from '@/components/forms/login-form';

const CompanyLogo = '/assets/images/company-logo.svg';

const Login = (): JSX.Element => (
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Image width={30} height={10} className="mx-auto" src={CompanyLogo} alt="Company logo" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>

      <LoginForm />
    </div>
  </div>
);

export default Login;
