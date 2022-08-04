import { useQueries } from '@tanstack/react-query';
import { HttpMethod } from 'components/constants/HttpMethod';
import { Resource } from 'components/constants/Resource';
import { SuccessData } from 'pages/api/populations';
import { ApiClient } from 'utils/ApiClient';

const usePopulations = (prefCodes: number[]) => {
  const results = useQueries({
    queries: prefCodes.map((code) => ({
      queryKey: [HttpMethod.GET.key, Resource.POPULATIONS.key, code],
      queryFn: () => {
        return ApiClient.get(Resource.POPULATIONS.route, { prefCode: code }).json<SuccessData>();
      },
    })),
  });
  const datum = results.map((result) => result.data);
  return { datum };
};
export default usePopulations;
