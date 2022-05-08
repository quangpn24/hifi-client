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
  addFavoritePost: async (userId: any, postId: any) => {
    return await axiosClient.post(`job-seeker/${userId}/favorite/add`, { userId, postId });
  },
  deleteFavoritePost: async (userId: any, postId: any) => {
    return await axiosClient.delete(`job-seeker/${userId}/favorite/delete`, {
      data: { userId, postId },
    });
  },
  getFavoritePost: async (userId: any, query: String = '') => {
    return await axiosClient.get(`job-seeker/${userId}/favorite-posts${query}`, userId);
  },
};
export default postApi;
