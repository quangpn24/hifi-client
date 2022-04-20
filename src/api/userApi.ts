import { User } from 'types';
import axiosClient from './axiosClient';

const userApi = {
  getUser: async (id: string) => {
    return await axiosClient.get(`/users/${id}`);
  },
  login: async (uid: string, type: string = 'default') => {
    const {
      data: { data: user, accessToken, refreshToken },
    } = await axiosClient.post('job-seeker/auth/login', { uid, type });
    return { user, accessToken, refreshToken };
  },
  register: async (userData: any) => {
    const {
      data: { data: user, accessToken, refreshToken },
    } = await axiosClient.post('job-seeker/auth/sign-up', { ...userData });
    return { user, accessToken, refreshToken };
  },
  getUserSkills: async () => {
    const {
      data: { data },
    } = await axiosClient.get('job-seeker/me/skills');
    return { user: data as User };
  },
  updateSkills: async (skillIds: string[]) => {
    const {
      data: { data },
    } = await axiosClient.post('job-seeker/me/skills', { skillIds });
    return { user: data };
  },
};
export default userApi;
