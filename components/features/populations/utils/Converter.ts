type Result = {
  year: number;
  [x: number]: number;
}[];

export const Converter = (prefDatum: { prefCode: number; data: Populations.Data[] }[]): Result => {
  let result: Result = [];
  prefDatum.forEach((pref) => {
    const { data, prefCode } = pref;

    data.forEach((item, index) => {
      const { value, year } = item;
      const current = result[index];
      result[index] = { ...current, year, [prefCode]: value };
    });
  });

  return result;
};
