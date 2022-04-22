import axios from 'axios';
import { store } from 'redux/store';

const axiosClient = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
axiosClient.interceptors.request.use(function (config) {
  const token = store.getState().auth.accessToken;
  if (token) {
    //@ts-ignore
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const setAuthToken = (token: string) => {
  if (token) {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};
export default axiosClient;
