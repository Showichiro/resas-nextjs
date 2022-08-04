export const HttpMethod = {
  GET: { key: 'get' },
  POST: { key: 'post' },
  put: { key: 'put' },
  delete: { key: 'delete' },
} as const;

export type HttpMethod = typeof HttpMethod[keyof typeof HttpMethod];
