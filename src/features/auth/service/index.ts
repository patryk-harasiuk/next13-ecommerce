import { users } from '@/data_access';
import { createHash } from '@/utils/password';

import { UserRegisterDTO } from '../types';

export const registerUser = async (userData: UserRegisterDTO) => {
  const { email, name, password } = userData;

  const hashedPassword = await createHash(password);

  const createdUser = await users.register({
    email,
    name,
    password: hashedPassword,
  });

  return createdUser;
};

// export const getUser = async (userId: string) => {
//   const foundUser = await users.findUnique({
//     where: {
//       id: userId,
//     },
//   });

//   if (!foundUser) throw new ApiError(`User with ${userId} id does not exist`);

//   return foundUser;
// };
