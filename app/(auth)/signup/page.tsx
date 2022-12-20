import SignupForm from '../(components)/SigupForm';

const Signup = (): JSX.Element => {
  const handleSubmitData = () => console.log('submitted');

  return (
    <div>
      <h2>Signup</h2>

      <SignupForm onSubmit={handleSubmitData} />
    </div>
  );
};

export default Signup;
