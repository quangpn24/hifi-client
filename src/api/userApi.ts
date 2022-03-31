import axiosClient from './axiosClient';

const userApi = {
  getUser: async (id: String) => {
    return await axiosClient.get(`/users/${id}`);
  },
  login: async (_id: string) => {
    return await axiosClient.post('auth/login', { _id });
  },
};
export default userApi;
