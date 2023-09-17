'use server';

import db from '@/lib/prisma-client';
import { cartItemSchema } from '@/lib/validations/cart';
import { CartItem, Cart } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { type z } from 'zod';

export async function getCartAction(): Promise<any> {}

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

  if (cartItem) {
    await db.cartItem.update({
      where: {
        productId_cartId: {
          productId: item.productId,
          cartId: cart.id,
        },
      },
      data: {
        quantity: (cartItem.quantity += item.quantity),
      },
    });
  } else {
    await db.cartItem.update({
      where: {
        productId_cartId: {
          productId: item.productId,
          cartId: cart.id,
        },
      },
      data: {
        quantity: item.quantity,
      },
    });
  }

  revalidatePath('/');
}

export async function getCartItemsAction(cartId: string) {
  if (!cartId || isNaN(Number(cartId))) return [];

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

export async function deleteCartAction() {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    throw new Error('CartId not found');
  }

  if (isNaN(Number(cartId))) {
    throw new Error('Invalid cartId, please try again.');
  }

  await db.cart.delete({ where: { id: cartId } });
}
