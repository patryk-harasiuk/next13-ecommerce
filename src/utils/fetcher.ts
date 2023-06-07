import zod, { ZodSchema } from 'zod';

import { ResponseError } from '@/errors/response-error';

export type RequestConfig<Schema extends ZodSchema | null> = {
  method: 'POST' | 'GET' | 'DELETE' | 'PATCH';
  schema: Schema;
  body?: object;
  config?: RequestInit;
};

export async function fetcher<Schema extends null>(
  url: string,
  { method, schema, body, config }: RequestConfig<Schema>,
): Promise<null>;

export async function fetcher<Schema extends ZodSchema>(
  url: string,
  { method, schema, body, config }: RequestConfig<Schema>,
): Promise<zod.infer<typeof schema>>;

export async function fetcher<Schema extends ZodSchema | null>(
  url: string,
  { method, schema, body, config }: RequestConfig<Schema>,
) {
  try {
    const response = await fetch(process.env.NEXTAUTH_URL + url, {
      ...config,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      method,
      ...(body && { body: JSON.stringify(body) }),
    });

    if (response.ok) {
      if (!schema) {
        return null;
      }

      const data = await response.json();

      schema.parse(data);
    }
    throw new ResponseError(response.statusText, response.status);
  } catch (error) {
    if (error instanceof ResponseError) {
      throw error;
    }
    throw new ResponseError('Something went wrong during fetching!');
  }
}
