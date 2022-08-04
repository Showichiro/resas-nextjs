import { Resource } from 'components/constants/Resource';
import ky, { SearchParamsOption } from 'ky-universal';

const client = ky.create({
  prefixUrl: '/api',
});

export const ApiClient = {
  get: (route: Resource['route'], searchParams: SearchParamsOption) => client.get(route, { searchParams }),
  post: (route: Resource['route'], json: unknown) => client.post(route, { json }),
  put: (route: Resource['route'], json: unknown) => client.put(route, { json }),
  delete: (route: Resource['route'], json: unknown) => client.get(route, { json }),
};
