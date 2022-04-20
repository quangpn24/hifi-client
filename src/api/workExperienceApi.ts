import axiosClient from './axiosClient';

const workExperienceApi = {
  getWorkExperiences: async () => {
    const {
      data: { data },
    } = await axiosClient.get('/job-seeker/experiences');
    return data;
  },
  createWorkExperience: async (workExperienceData: any) => {
    const {
      data: { data },
    } = await axiosClient.post('/job-seeker/experiences', { ...workExperienceData });
    return data;
  },
  updateWorkExperience: async (id: string, updatedData: any) => {
    const {
      data: { data },
    } = await axiosClient.put('/job-seeker/experiences/' + id, { ...updatedData });
    return data;
  },
  deleteWorkExperience: async (id: string) => {
    const {
      data: { data },
    } = await axiosClient.delete('/job-seeker/workExperiences/' + id);
    return data;
  },
};
export default workExperienceApi;
