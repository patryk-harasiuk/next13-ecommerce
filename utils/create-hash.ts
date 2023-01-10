import * as bcrypt from 'bcrypt';

export const createHash = async (data: string): Promise<string> => {
  const hashedData = await bcrypt.hash(data, 10);

  return hashedData;
};
