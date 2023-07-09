import { Metadata } from 'next';

import LoginForm from '@/components/forms/login-form';
import Shell from '@/components/shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Log in to your account',
};

const Login = (): JSX.Element => (
  <Shell layout="auth">
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>

      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  </Shell>
);

export default Login;
