import axiosClient from './axiosClient';

const jobInterestedApi = {
  getJobInterest: async () => {
    const {
      data: { data },
    } = await axiosClient.get('/job-seeker/me/job-interests');
    return data as JobInterest;
  },
  createJobInterest: async (jobInterestData: any) => {
    const {
      data: { data },
    } = await axiosClient.post('/job-seeker/me/job-interests', { ...jobInterestData });
    return data;
  },
  updateJobInterest: async (updatedData: any) => {
    if (!updatedData._id) {
      const {
        data: { data },
      } = await axiosClient.post('/job-seeker/me/job-interests', { ...updatedData });
      return data;
    }

    const {
      data: { data },
    } = await axiosClient.put('/job-seeker/me/job-interests/' + updatedData._id, {
      ...updatedData,
    });
    return data;
  },
  deleteJobInterest: async (id: string) => {
    const {
      data: { data },
    } = await axiosClient.delete('/job-seeker/me/job-interests/' + id);
    return data;
  },
};
export default jobInterestedApi;
