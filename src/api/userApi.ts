import axiosClient from './axiosClient';

const userApi = {
  getUser: async (id: string) => {
    return await axiosClient.get(`/users/${id}`);
  },
  login: async (uid: string, type: string = 'default') => {
    const { data: data } = await axiosClient.post('auth/login', { uid, type });
    return data;
  },
  register: async (user: any) => {
    const { data: data } = await axiosClient.post('auth/sign-up', { ...user });
    return data;
  },
};
export default userApi;
