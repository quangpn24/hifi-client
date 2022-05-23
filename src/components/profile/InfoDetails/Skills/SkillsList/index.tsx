import { Space } from 'antd';
import React from 'react';
import { Skill } from 'types';
import Chip from '../Chip';

type Props = {
  skills?: Skill[];
};

const SkillsList = ({ skills }: Props) => {
  return (
    <Space className='mt-4' size={[8, 16]} wrap>
      {skills?.map((skill) => (
        <Chip key={skill?._id ?? skill} text={skill.text} />
      ))}
    </Space>
  );
};

export default SkillsList;
