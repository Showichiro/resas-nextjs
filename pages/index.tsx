import Populations from 'components/features/populations/Populations';
import Prefectures from 'components/features/prefectures/Prefectures';
import { useCallback, useState } from 'react';
import { HttpClient } from 'utils/HttpClient';

type IndexProps = {
  result: Prefectures.Result[];
};

const Index = ({ result }: IndexProps) => {
  const [selected, setSelected] = useState<number[]>([]);

  const handleChangePref = useCallback((prefCode: number, checked: boolean) => {
    if (checked) {
      setSelected((prev) => [...prev, prefCode]);
    } else {
      setSelected((prev) => prev.filter((code) => code !== prefCode));
    }
  }, []);

  return (
    <>
      <div className="base">
        <Prefectures selected={selected} prefectureList={result} onChangePref={handleChangePref} />
      </div>
      <div className="base">
        <Populations prefectureList={result} selected={selected} />
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const url = process.env.PREFECTURES as string;
  const response = await HttpClient.get(url).json<Prefectures.Response>();
  const { result } = response;
  return {
    props: { result },
  };
}
