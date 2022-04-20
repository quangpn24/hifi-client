import { Skill } from 'types';
import axiosClient from '../axiosClient';

const suggestionApi = {
  getSkills: async (keyword?: string) => {
    const params = new URLSearchParams({});
    keyword && params.append('q', keyword);
    params.append('limit', 20 + '');
    const {
      data: { data },
    } = await axiosClient.get('/suggestion/skills?' + params.toString());
    return data as Skill[];
  },
};
export default suggestionApi;
