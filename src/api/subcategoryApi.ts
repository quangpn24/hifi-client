import axiosClient from './axiosClient';

const url = '/job-seeker/subcategories';
const subcategoryApi = {
  getSubByCategoryId: async (categoryId: string) => {
    return await axiosClient.get(`${url}/${categoryId}`);
  },
};

export default subcategoryApi;
