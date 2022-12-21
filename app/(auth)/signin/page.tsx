'use client';

import SigninForm from '../SigninForm';

const Signin = (): JSX.Element => {
  const handleSignup = () => console.log('logged in!');

  return (
    <div>
      <h2>Signin</h2>

      <SigninForm onSubimt={handleSignup} />
    </div>
  );
};

export default Signin;
