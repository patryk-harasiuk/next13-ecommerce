import * as z from 'zod';

export const registerSchema = z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
});

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  createdAt: z.string(),
});

export const loginSchema = {
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
};
