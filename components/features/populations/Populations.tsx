import { SuccessData } from 'pages/api/populations';
import { useMemo } from 'react';
import { Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import usePopulations from './hooks/usePopulations';
import { Convertor } from './utils/Convertor';

type PopulationsProps = {
  prefectureList: Prefectures.Result[];
  selected: number[];
};

const Populations = ({ prefectureList, selected }: PopulationsProps) => {
  const colors = useMemo(
    () => [...Array(prefectureList.length)].map((_, index) => `hsl(${Math.floor((index * index) % 360)}, 80%, 64%)`),
    [prefectureList]
  );
  const findNameByPrefCode = useMemo(
    () => (code: number) => prefectureList.find((pref) => pref.prefCode === code)?.prefName ?? '',
    [prefectureList]
  );
  const { datum } = usePopulations(selected);
  const filtered = (datum.filter((data) => data !== undefined) as SuccessData[]).map((data) => {
    const { prefCode, result } = data;
    const [total] = result.result.data;
    return { prefCode, data: total.data };
  });
  const data = Convertor(filtered);
  const lines = useMemo(
    () =>
      filtered.map((pref) => (
        <Line
          name={findNameByPrefCode(pref.prefCode)}
          key={`line-${pref.prefCode}`}
          dataKey={pref.prefCode}
          stroke={colors[pref.prefCode - 1]}
        />
      )),
    [colors, filtered, findNameByPrefCode]
  );
  return (
    <div>
      <div className="title">人口推移</div>
      {data.length > 0 && (
        <LineChart width={800} height={600} data={data} margin={{ bottom: 20, left: 20 }}>
          <XAxis dataKey="year" label={{ value: '年次', position: 'bottom' }} />
          <YAxis width={100} label={{ value: '人口', angle: -90, position: 'left' }} />
          {lines}
          <Legend align="right" verticalAlign="top" />
        </LineChart>
      )}
    </div>
  );
};
export default Populations;
