import z from 'zod';

import { userSchema } from '@/lib/validations/auth';

// type Props = { user: z.infer<typeof userSchema> };

const Account = () => (
  <div>
    {/* {user.email} {user.name} */}
    USER PROFILE
  </div>
);

export default Account;
