import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import TextInput from '@/components/form/TextInput';

type SigninInputs = {
  email: string;
  password: string;
};

type SigninFormProps = {
  onSubimt: () => void;
};

const schema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(8, 'Password is required'),
});

const SigninForm = ({ onSubimt }: SigninFormProps): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SigninInputs>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubimt)}>
      <TextInput type="text" registration={register('email')} label="Email" error={errors.email} />

      <TextInput
        type="text"
        registration={register('password')}
        label="Password"
        error={errors.password}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SigninForm;
