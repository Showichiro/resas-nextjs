import { ChangeEvent, useMemo } from 'react';

type PrefecturesProps = {
  selected: number[];
  prefectureList: Prefectures.Result[];
  onChangePref: (prefCode: number, checked: boolean) => void;
};

const Prefectures = ({ selected, prefectureList, onChangePref }: PrefecturesProps) => {
  const checkboxes = useMemo(
    () =>
      prefectureList.map((pref) => {
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
      }),
    [onChangePref, prefectureList, selected]
  );
  return (
    <div className="prefectures">
      <h1 className="title">ι½ιεΊη</h1>
      <div className="container">{checkboxes}</div>
    </div>
  );
};

export default Prefectures;
