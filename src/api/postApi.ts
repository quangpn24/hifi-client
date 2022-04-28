import axios from 'axios';
import axiosClient from './axiosClient';

const postApi = {
  getPosts: async () => {
    const {
      data: { data },
    } = await axiosClient.get('job-seeker/posts');

    return data;
  },
  getPostDetail: async (postId: string) => {
    const {
      data: { data },
    } = await axiosClient.get('job-seeker/posts/' + postId);

    return data;
  },
};
export default postApi;
