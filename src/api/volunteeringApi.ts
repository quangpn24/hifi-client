import axiosClient from './axiosClient';

const volunteeringApi = {
  getVolunteerings: async () => {
    const {
      data: { data },
    } = await axiosClient.get('/job-seeker/volunteerings');
    return data;
  },
  createVolunteering: async (volunteeringData: any) => {
    const {
      data: { data },
    } = await axiosClient.post('/job-seeker/volunteerings', { ...volunteeringData });
    return data;
  },
  updateVolunteering: async (id: string, updatedData: any) => {
    const {
      data: { data },
    } = await axiosClient.put('/job-seeker/volunteerings/' + id, { ...updatedData });
    return data;
  },
  deleteVolunteering: async (id: string) => {
    const {
      data: { data },
    } = await axiosClient.delete('/job-seeker/volunteerings' + id);
    return data;
  },
};
export default volunteeringApi;
