import axios from 'axios';
import axiosClient from './axiosClient';

const authApi = {
  verify: async (accessToken?: string) => {
    // const accessToken = axiosClient.defaults.headers.common['Authorization'];

    if (!accessToken) {
      throw new Error('Access Token is required');
    }
    const {
      data: { data: user },
    } = await axiosClient.get('job-seeker/auth', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return { user };
  },
  login: async (loginData: any) => {
    const {
      data: { data: user, accessToken, refreshToken },
    } = await axiosClient.post('job-seeker/auth/login', { ...loginData });
    return { user, accessToken, refreshToken };
  },
  register: async (userData: any) => {
    const {
      data: { data: user, accessToken, refreshToken },
    } = await axiosClient.post('job-seeker/auth/register', { ...userData });
    return { user, accessToken, refreshToken };
  },
};
export default authApi;
