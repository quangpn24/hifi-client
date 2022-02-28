import axiosClient from './axiosClient';

const userApi = {
  getUser: async (id : String) => {
    return await axiosClient.get(`/users/${id}`);
  },
};
export default userApi;