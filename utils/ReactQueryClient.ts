import { QueryClient } from '@tanstack/react-query';

const client = new QueryClient({
  defaultOptions: { queries: { retry: false, staleTime: Infinity, cacheTime: Infinity } },
});

export const ReactQueryClient = {
  instance: client,
};
