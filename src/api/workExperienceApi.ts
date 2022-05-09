import axiosClient from './axiosClient';
const ROUTE = '/job-seeker/me/experiences';
const workExperienceApi = {
  getWorkExperiences: async () => {
    const {
      data: { data },
    } = await axiosClient.get(ROUTE);
    return data;
  },
  createWorkExperience: async (workExperienceData: any) => {
    const {
      data: { data },
    } = await axiosClient.post(ROUTE, { ...workExperienceData });
    return data;
  },
  updateWorkExperience: async (id: string, updatedData: any) => {
    const {
      data: { data },
    } = await axiosClient.put(ROUTE + '/' + id, { ...updatedData });
    return data;
  },
  deleteWorkExperience: async (id: string) => {
    const {
      data: { data },
    } = await axiosClient.delete(ROUTE + '/' + id);
    return data;
  },
};
export default workExperienceApi;
