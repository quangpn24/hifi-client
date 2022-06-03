import axiosClient from './axiosClient';

const url = '/job-seeker/categories';
const categoryApi = {
  getCategories: async (query: String = '') => {
    return await axiosClient.get(`${url}${query}`);
  },
};

export default categoryApi;
