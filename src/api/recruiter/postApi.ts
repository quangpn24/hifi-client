import axiosClient from '../axiosClient';

const postApi = {
  getAllPost: () => {
    return axiosClient.get('/recruiter/posts');
  },
  createPost: (post: any) => {
    return axiosClient.post('/recruiter/posts', {
      ...post,
    });
  },
};
export default postApi;
