import axios from 'axios';
import axiosClient from './axiosClient';

const authApi = {
  verify: async () => {
    const accessToken = axiosClient.defaults.headers.common['Authorization'];

    console.log('verify: ', accessToken);
    const {
      data: { data: user },
    } = await axiosClient.get('job-seeker/auth');

    return { user };
  },
  login: async (loginData: any) => {
    const {
      data: { data: user, accessToken, refreshToken },
    } = await axiosClient.post('job-seeker/auth/login', { ...loginData });
    // } = await axios.post('/auth/login', { ...loginData });

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
