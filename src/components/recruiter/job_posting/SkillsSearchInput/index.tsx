import { Select, Typography } from 'antd';
import skillApi from 'api/recruiter/skillApi';
import React, { useRef, useState } from 'react';
import { Skill } from '../types';
const { Title } = Typography;
const { Option } = Select;

interface IProps {
  style?: React.CSSProperties;
  value?: Skill;
  onChange?: (value: Skill) => void;
}

const SkillsSearchSelect: React.FC<IProps> = (props: IProps) => {
  const { value, onChange } = props;
  const [data, setData] = useState<Skill[]>([]);
  const skillSelectRef = useRef<any>(null);
  const handleSearch = async (keyword: string) => {
    if (keyword) {
      const matchSkills = await skillApi.fetchSkills(keyword);
      setData(matchSkills);
    } else {
      setData([]);
    }
  };
  const handleChange = (selectedValue: Skill) => {
    if (!value) return;
    console.log(selectedValue);
    onChange?.(selectedValue);
    skillSelectRef.current.blur();
  };
  return (
    <div>
      <Title level={5}>Skill Tags</Title>
      <Select
        showSearch
        mode='multiple'
        ref={(select) => (skillSelectRef.current = select)}
        placeholder={'Please choose 2 skills'}
        onSearch={handleSearch}
        onChange={handleChange}
        value={value}
        size='large'
        notFoundContent={<p>Not found</p>}
      >
        {data.map((d) => (
          <Option key={d.id}>{d.text}</Option>
        ))}
      </Select>
    </div>
  );
};

export default SkillsSearchSelect;
