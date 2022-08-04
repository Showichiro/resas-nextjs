import ky, { SearchParamsOption } from 'ky-universal';

const client = ky.create({
  prefixUrl: process.env.BASE_URL,
  headers: {
    'X-API-KEY': process.env.API_KEY,
  },
});

/**
 * httpClient for server
 */
export const HttpClient = {
  get: (url: string, searchParams?: SearchParamsOption) => client.get(url, { searchParams }),
  post: (url: string, json?: unknown) => client.post(url, { json }),
  put: (url: string, json?: unknown) => client.put(url, { json }),
  delete: (url: string, json?: unknown) => client.delete(url, { json }),
};
