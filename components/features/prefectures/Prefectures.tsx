import { ChangeEvent } from 'react';

type PrefecturesProps = {
  selected: number[];
  prefectureList: Prefectures.Result[];
  onChangePref: (prefCode: number, checked: boolean) => void;
};

const Prefectures = ({ selected, prefectureList, onChangePref }: PrefecturesProps) => {
  return (
    <div className="prefectures">
      <h1 className="title">都道府県</h1>
      <div className="container">
        {prefectureList.map((pref) => {
          const key = `pref-${pref.prefCode}`;
          const handleChangePref = (e: ChangeEvent<HTMLInputElement>) => onChangePref(pref.prefCode, e.target.checked);
          return (
            <div key={key}>
              <input
                type="checkbox"
                name="prefectures"
                id={key}
                checked={selected.includes(pref.prefCode)}
                onChange={handleChangePref}
              />
              <label className="checkbox" htmlFor={key}>
                {pref.prefName}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Prefectures;
