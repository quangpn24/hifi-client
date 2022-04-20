import axiosClient from './axiosClient';

const jobInterestedApi = {
  getWorkExperiences: async () => {
    const {
      data: { data },
    } = await axiosClient.get('/job-seeker/job-interests');
    return data;
  },
  createJobInterest: async (jobInterestData: any) => {
    const {
      data: { data },
    } = await axiosClient.post('/job-seeker/job-interests', { ...jobInterestData });
    return data;
  },
  updateJobInterest: async (id: string, updatedData: any) => {
    const {
      data: { data },
    } = await axiosClient.put('/job-seeker/job-interests' + id, { ...updatedData });
    return data;
  },
  deleteJobInterest: async (id: string) => {
    const {
      data: { data },
    } = await axiosClient.delete('/job-seeker/job-interests' + id);
    return data;
  },
};
export default jobInterestedApi;
