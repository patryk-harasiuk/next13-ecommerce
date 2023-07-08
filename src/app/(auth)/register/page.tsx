import { Metadata } from 'next';

import RegisterForm from '@/components/forms/register-form';
import Shell from '@/components/shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Create an account',
  description: 'Create an account to get started',
};

const RegisterPage = () => (
  <Shell layout="auth">
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>Sign up to your account</CardDescription>
      </CardHeader>

      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  </Shell>
);

export default RegisterPage;
