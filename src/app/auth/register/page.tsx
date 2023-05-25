import Image from 'next/image';

import RegisterForm from '@/features/auth/components/RegisterForm';

const Page = () => {
  const CompanyLogo = '/assets/images/company-logo.svg';
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image width={30} height={10} className="mx-auto" src={CompanyLogo} alt="Company logo" />
        <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>

        <RegisterForm />
      </div>
    </div>
  );
};

export default Page;
