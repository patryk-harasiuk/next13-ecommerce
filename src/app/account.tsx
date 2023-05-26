import z from 'zod';

import { userSchema } from '@/features/auth/schema';

type Props = { user: z.infer<typeof userSchema> };

const Account = ({ user }: Props) => (
  <div>
    {user.email} {user.name}
  </div>
);

export default Account;
