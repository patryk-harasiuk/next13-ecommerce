'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { type z } from 'zod';

import db from '@/lib/prisma-client';
import {
  cartItemSchema,
  deleteCartItemSchema,
  deleteCartItemsSchema,
} from '@/lib/validations/cart';

export async function addToCartAction(item: z.infer<typeof cartItemSchema>) {
  const cookieStore = cookies();

  const cartId = cookieStore.get('cartId')?.value;

  if (!cartId) {
    const newCart = await db.cart.create({
      data: {
        items: {
          create: [
            {
              quantity: item.quantity,
              product: {
                connect: {
                  id: item.productId,
                },
              },
            },
          ],
        },
      },
    });

    cookieStore.set('cartId', String(newCart.id));

    revalidatePath('/');
    return;
  }

  const cart = await db.cart.findFirst({
    where: { id: cartId },
  });

  if (!cart) {
    throw new Error('Cart not found');
  }

  if (cart.cartStatus !== 'current') {
    const newCart = await db.cart.create({
      data: {
        items: {
          create: [
            {
              quantity: item.quantity,
              product: {
                connect: {
                  id: item.productId,
                },
              },
            },
          ],
        },
      },
    });

    cookieStore.set('cartId', String(newCart.id));

    revalidatePath('/');
    return;
  }

  const cartItem = await db.cartItem.findFirst({
    where: {
      productId: item.productId,
    },
  });

  await (cartItem
    ? db.cartItem.update({
        where: {
          productId_cartId: {
            productId: item.productId,
            cartId: cart.id,
          },
        },
        data: {
          quantity: (cartItem.quantity += item.quantity),
        },
      })
    : db.cartItem.update({
        where: {
          productId_cartId: {
            productId: item.productId,
            cartId: cart.id,
          },
        },
        data: {
          quantity: item.quantity,
        },
      }));

  revalidatePath('/');
}

export async function getCartItemsAction() {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId || Number.isNaN(Number(cartId))) return [];

  const cartItems = await db.product.findMany({
    where: {
      cartItems: {
        every: {
          cartId,
        },
      },
    },
  });

  return cartItems;
}

export async function deleteCartItemAction(input: z.infer<typeof deleteCartItemSchema>) {
  await db.cartItem.delete({
    where: {
      productId_cartId: {
        productId: input.productId,
        cartId: input.cartId,
      },
    },
  });

  revalidatePath('/');
}

export async function deleteCartItemsAction(input: z.infer<typeof deleteCartItemsSchema>) {
  await db.cartItem.deleteMany({
    where: {
      cartId: input.cartId,
    },
  });

  revalidatePath('/');
}

export async function deleteCartAction() {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    throw new Error('CartId not found');
  }

  if (Number.isNaN(Number(cartId))) {
    throw new TypeError('Invalid cartId, please try again.');
  }

  await db.cart.delete({ where: { id: cartId } });
}
