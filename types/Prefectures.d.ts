declare namespace Prefectures {
  type Result = {
    prefCode: number;
    prefName: string;
  };
  type Response = {
    message: null;
    result: Result[];
  };
}
