import axiosClient from './axiosClient';

const url = '/job-seeker/posts';
const postApi = {
  getPosts: async (query: String = '') => {
    return await axiosClient.get(`${url}${query}`);
  },

  getById: async (id: any) => {
    return await axiosClient.get(`${url}/${id}`);
  },
  getFilterOption: async () => {
    return await axiosClient.get(`${url}/filter-option`);
  },
};
export default postApi;
