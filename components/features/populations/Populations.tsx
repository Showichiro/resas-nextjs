import { useMemo } from 'react';
import { Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import usePopulations from './hooks/usePopulations';

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

  const { convertedData } = usePopulations(selected);

  const lines = useMemo(
    () =>
      selected.map((prefCode) => (
        <Line
          name={findNameByPrefCode(prefCode)}
          key={`line-${prefCode}`}
          dataKey={prefCode}
          stroke={colors[prefCode - 1]}
        />
      )),
    [colors, findNameByPrefCode, selected]
  );

  return (
    <div>
      <div className="title">人口推移</div>
      {convertedData.length > 0 && (
        <LineChart width={800} height={600} data={convertedData} margin={{ bottom: 20, left: 20 }}>
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
