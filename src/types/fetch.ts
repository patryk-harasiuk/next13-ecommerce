import { ZodSchema } from 'zod';

export type HTTPMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type RequestConfig<Schema extends ZodSchema | null> = {
  readonly method: HTTPMethod;
  readonly schema: Schema;
  readonly body?: object;
  readonly config?: RequestInit;
};
