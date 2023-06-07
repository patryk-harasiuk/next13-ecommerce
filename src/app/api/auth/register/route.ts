import * as z from 'zod';

const registerUserSchema = z.object({
  email: z.string().min(1).email(),
  name: z.string().min(1),
  password: z.string().min(8),
});

export async function POST(req: Request) {
  try {
    console.log(req, 'REQ XD');
  } catch {
    return null;
  }
}
