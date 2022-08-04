declare namespace Populations {
  type Data = {
    year: number;
    value: number;
    rate?: number;
  };
  type Total = {
    label: '総人口';
    data: Data[];
  };
  type Young = {
    label: '年少人口';
    data: Data[];
  };
  type WorkingAge = {
    label: '生産年齢人口';
    data: Data[];
  };
  type Elderly = {
    label: '老年人口';
    data: Data[];
  };
  type Result = {
    boundaryYear: number;
    data: [Total, Young, WorkingAge, Elderly];
  };

  type Request = {
    prefCode: string;
    cityCode: string;
    addArea?: string;
  };
  type Response = {
    message: null;
    result: Result;
  };
}
