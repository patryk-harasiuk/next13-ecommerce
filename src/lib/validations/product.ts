import * as z from 'zod';

export const productSchema = z.object({
  id: z.string(),
  description: z.string(),
  name: z.string(),
  price: z.string(),
  image: z.string(),
});

export const productsSchema = z.array(productSchema);
