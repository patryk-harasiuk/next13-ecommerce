import * as z from 'zod';

export const cartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(0),
  cartId: z.string(),
});

export const deleteCartItemSchema = z.object({
  productId: z.string(),
  cartId: z.string(),
});

export const deleteCartItemsSchema = z.object({
  cartId: z.string(),
});
