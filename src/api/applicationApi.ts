import axiosClient from './axiosClient';
const ROUTE = '/job-seeker/me/applications';

type Query = Partial<{
  status: string;
}>;
type QueryKeys = keyof Query;
const applicationApi = {
  getApplications: async (query?: Query) => {
    const params = new URLSearchParams({});

    if (query) {
      Object.keys(query).forEach((key) => {
        if (query[key as QueryKeys]) {
          params.append(key, query[key as QueryKeys]!);
        }
      });
    }
    const {
      data: { data },
    } = await axiosClient.get(ROUTE, {
      params,
    });
    return data;
  },
  getApplicationDetail: async (id: string) => {
    const {
      data: { data },
    } = await axiosClient.get(ROUTE + '/' + id);
    return data;
  },
  createApplication: async (application: Partial<Application>) => {
    const {
      data: { data },
    } = await axiosClient.post(ROUTE, { ...application });
    return data;
  },
};
export default applicationApi;
