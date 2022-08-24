import { useQueries } from '@tanstack/react-query';
import { Resource } from 'components/constants/Resource';
import { SuccessData } from 'pages/api/populations';
import { useMemo } from 'react';
import { ApiClient } from 'utils/ApiClient';
import { Converter } from '../utils/Converter';

const usePopulations = (prefCodes: number[]) => {
  const results = useQueries({
    queries: prefCodes.map((code) => ({
      queryKey: [Resource.POPULATIONS.key, code],
      queryFn: () => {
        return ApiClient.get(Resource.POPULATIONS.route, { prefCode: code }).json<SuccessData>();
      },
      select: (data: SuccessData) => ({ prefCode: data.prefCode, data: data.result.result.data[0].data }),
    })),
  });

  const convertedData = useMemo(() => {
    const datum = results.filter((result) => result.data !== undefined).map((result) => result.data!);
    return Converter(datum);
  }, [results]);

  return { convertedData };
};
export default usePopulations;
