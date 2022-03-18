import { Select, Typography } from 'antd';
import React from 'react';

const { Option, OptGroup } = Select;
const { Title } = Typography;
interface IProps {
  value?: string;
  onChange?: (value: string) => void;
}
const categories = [
  {
    id: 1,
    name: 'Financial Services',
    subcategories: [
      { id: 14, name: 'Auditing' },
      { id: 25, name: 'Banking' },
      { id: 36, name: 'Insurance' },
    ],
  },
  {
    id: 2,
    name: 'Technology',
    subcategories: [
      { id: 13, name: 'IT - Hardware/Networking' },
      { id: 23, name: 'IT - Software' },
    ],
  },
  {
    id: 3,
    name: 'Front Office',
    subcategories: [
      { id: 11, name: 'Marketing' },
      { id: 21, name: 'Sales' },
      { id: 31, name: 'Sales Technical' },
      { id: 41, name: 'Customer Service' },
    ],
  },
];
const JobCategory: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <div>
      <Title level={5}>Job catgory</Title>
      <Select
        mode='multiple'
        allowClear
        defaultValue='lucy'
        size='large'
        value={value}
        onChange={onChange}
      >
        {categories.map((cat) => (
          <OptGroup key={cat.id} label={cat.name}>
            {cat.subcategories.map((sub) => (
              <Option key={sub.id} value={sub.name}>
                {sub.name}
              </Option>
            ))}
          </OptGroup>
        ))}
      </Select>
    </div>
  );
};

export default JobCategory;
