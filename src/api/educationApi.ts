import axiosClient from './axiosClient';
const ROUTE = '/job-seeker/me/educations';

const educationApi = {
  getEducations: async () => {
    const {
      data: { data },
    } = await axiosClient.get(ROUTE);
    return data;
  },
  createEducation: async (educationData: any) => {
    const {
      data: { data },
    } = await axiosClient.post(ROUTE, { ...educationData });
    return data;
  },
  updateEducation: async (id: string, updatedData: any) => {
    const {
      data: { data },
    } = await axiosClient.put(ROUTE + `/${id}`, { ...updatedData });
    return data;
  },
  deleteEducation: async (id: string) => {
    const {
      data: { data },
    } = await axiosClient.delete(ROUTE + `/${id}`);
    return data;
  },
};
export default educationApi;
