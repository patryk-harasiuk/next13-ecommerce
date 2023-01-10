'use client';

import SigninForm from 'features/auth/components/SigninForm';

const Signin = (): JSX.Element => {
  const handleSignup = () => console.log('logged in!');

  return (
    <div className="mt-10 flex items-ceter justify-center">
      <div className="min-w-[500px] self-center flex flex-col gap-6">
        <h2 className="text-3xl text-center">Signin</h2>

        <SigninForm onSubmit={handleSignup} />
      </div>
    </div>
  );
};

export default Signin;
