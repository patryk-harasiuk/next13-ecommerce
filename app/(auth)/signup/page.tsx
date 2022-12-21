'use client';

import SignupForm from '../SigupForm';

const Signup = (): JSX.Element => {
  const handleSubmitData = () => console.log('submitted');

  return (
    <div className="mt-10 flex items-ceter justify-center">
      <div className="min-w-[500px] self-center flex flex-col gap-6">
        <h2 className="text-3xl text-center">Signup</h2>

        <SignupForm onSubmit={handleSubmitData} />
      </div>
    </div>
  );
};

export default Signup;
