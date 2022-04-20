import axiosClient from './axiosClient';

const awardApi = {
  getAwards: async () => {
    const {
      data: { data },
    } = await axiosClient.get('/job-seeker/me/awards');
    return data;
  },
  createAward: async () => {
    const {
      data: { data },
    } = await axiosClient.post('/job-seeker/me/awards');
    return data;
  },
  updateAward: async (awardId: string, updatedData: any) => {
    const {
      data: { data },
    } = await axiosClient.put('/job-seeker/me/awards/' + awardId, { ...updatedData });
    return data;
  },
  deleteAward: async (awardId: string) => {
    const {
      data: { data },
    } = await axiosClient.delete('/job-seeker/me/awards' + awardId);
    return data;
  },
};
export default awardApi;
