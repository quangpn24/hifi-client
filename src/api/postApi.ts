import axiosClient from './axiosClient';

const url = '/job-seeker/posts';
const postApi = {
  getPosts: async (query: String = '') => {
    return await axiosClient.get(`${url}${query}`);
  },

  getPostsLandingPage: async (categoryId: String) => {
    return await axiosClient.get(`/suggestion/${categoryId}/posts`);
  },

  getById: async (id: any) => {
    return await axiosClient.get(`${url}/${id}`);
  },
  getFilterOption: async () => {
    return await axiosClient.get(`${url}/filter-option`);
  },
  addFavoritePost: async (userId: any, postId: any) => {
    return await axiosClient.post(`job-seeker/profile/${userId}/favorite/add`, { userId, postId });
  },
  deleteFavoritePost: async (userId: any, postId: any) => {
    return await axiosClient.delete(`job-seeker/profile/${userId}/favorite/delete`, {
      data: { userId, postId },
    });
  },
  getFavoritePost: async (userId: any, query: String = '') => {
    return await axiosClient.get(`job-seeker/profile/${userId}/favorite-posts${query}`);
  },
};
export default postApi;
