import axiosClient from './axiosClient';
const userApi = {
  updateMe: async (updated: Partial<User & { password: string; preferredStartDate: Date }>) => {
    const {
      data: { data },
    } = await axiosClient.put('/job-seeker/me', updated);

    return data as User;
  },
  getUserSkills: async () => {
    const {
      data: { data },
    } = await axiosClient.get('job-seeker/me/skills');
    return { user: data as User };
  },
  updateSkills: async (skillIds: string[]) => {
    const {
      data: { data },
    } = await axiosClient.post('job-seeker/me/skills', { skillIds });
    return { user: data as User };
  },
};
export default userApi;
