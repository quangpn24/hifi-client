import axiosClient from 'api/axiosClient';
import { Category, Skill } from 'types';

const suggestionApi = {
  searchSkills: async (keyword: string, selectedSkill?: string[]): Promise<Skill[]> => {
    const params = new URLSearchParams({
      q: keyword,
      selected: selectedSkill ? selectedSkill.join(',') : '',
    });
    console.log('params: ', params.toString());
    const { data } = await axiosClient.get(`/suggestion/skills?${params.toString()}`);
    return data.data as Skill[];
  },
  getAllCategories: async (): Promise<Category[]> => {
    const { data } = await axiosClient.get(`/suggestion/categories`);
    return data.categories as Category[];
  },
};

export default suggestionApi;
