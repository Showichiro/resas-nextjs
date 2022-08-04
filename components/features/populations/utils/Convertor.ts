type Result = {
  year: number;
  [x: number]: number;
}[];

export const Convertor = (data: { prefCode: number; data: Populations.Data[] }[]): Result => {
  let result: Result = [];
  data.forEach((pref) => {
    const { data, prefCode } = pref;
    data.forEach((item, index) => {
      const { value, year } = item;
      const current = result[index];
      result[index] = { ...current, year, [prefCode]: value };
    });
  });
  return result;
};
