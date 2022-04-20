import axiosClient from './axiosClient';

const educationApi = {
  getEducations: async () => {
    const {
      data: { data },
    } = await axiosClient.get('/job-seeker/educations');
    return data;
  },
  createEducation: async (educationData: any) => {
    const {
      data: { data },
    } = await axiosClient.post('/job-seeker/educations', { ...educationData });
    return data;
  },
  updateEducation: async (id: string, updatedData: any) => {
    const {
      data: { data },
    } = await axiosClient.put('/job-seeker/educations/' + id, { ...updatedData });
    return data;
  },
  deleteEducation: async (id: string) => {
    const {
      data: { data },
    } = await axiosClient.delete('/job-seeker/educations' + id);
    return data;
  },
};
export default educationApi;
