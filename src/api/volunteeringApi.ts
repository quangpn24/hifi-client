import axiosClient from './axiosClient';

const volunteeringApi = {
  getVolunteerings: async () => {
    const {
      data: { data },
    } = await axiosClient.get('/job-seeker/me/volunteerings');
    return data;
  },
  createVolunteering: async (volunteeringData: any) => {
    const {
      data: { data },
    } = await axiosClient.post('/job-seeker/me/volunteerings', { ...volunteeringData });
    return data;
  },
  updateVolunteering: async (id: string, updatedData: any) => {
    const {
      data: { data },
    } = await axiosClient.put('/job-seeker/me/volunteerings/' + id, { ...updatedData });
    return data;
  },
  deleteVolunteering: async (id: string) => {
    const {
      data: { data },
    } = await axiosClient.delete('/job-seeker/me/volunteerings' + id);
    return data;
  },
};
export default volunteeringApi;
