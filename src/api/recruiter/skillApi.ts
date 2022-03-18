import { Skill } from 'components/recruiter/job_posting/types';

const skillData: Skill[] = [
  {
    id: 'Golang',
    text: 'Golang',
  },
  {
    id: 'Nodejs',
    text: 'Nodejs',
  },
  {
    id: 'Reactjs',
    text: 'Reactjs',
  },
  {
    id: 'MongoDB',
    text: 'MongoDB',
  },
];

const skillApi = {
  fetchSkills(keyword: string): Promise<Skill[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(skillData);
      }, 1000);
    });
  },
};

export default skillApi;
