import axiosClient from './axiosClient';

const suggestionApi = {
  getAllJobCategories: async () => {
    const {
      data: { data },
    } = await axiosClient.get('/suggestion/categories');
    console.log('Categories: ', data);
    return data as Category[];
  },
  getSkills: async (keyword?: string) => {
    const params = new URLSearchParams({});
    keyword && params.append('q', keyword);
    params.append('limit', 20 + '');
    const {
      data: { data },
    } = await axiosClient.get('/suggestion/skills?' + params.toString());
    return data as Skill[];
  },
  getUniversities: async (keyword?: string) => {
    const params = new URLSearchParams({});
    keyword && params.append('q', keyword);
    params.append('limit', 20 + '');
    const {
      data: { data },
    } = await axiosClient.get('/suggestion/universities?' + params.toString());
    return data as string[];
  },
  getDegrees: async (keyword?: string) => {
    const params = new URLSearchParams({});
    keyword && params.append('q', keyword);
    params.append('limit', 20 + '');
    const {
      data: { data },
    } = await axiosClient.get('/suggestion/degrees?' + params.toString());
    return data as string[];
  },
  getMajors: async (keyword?: string) => {
    const params = new URLSearchParams({});
    keyword && params.append('q', keyword);
    params.append('limit', 20 + '');
    const {
      data: { data },
    } = await axiosClient.get('/suggestion/majors?' + params.toString());
    return data as string[];
  },
};
export default suggestionApi;
