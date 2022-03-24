import { Select, Typography } from 'antd';
import suggestionApi from 'api/recruiter/suggestionApi';
import React, { useEffect, useState } from 'react';
import { Category } from 'types';

const { Option, OptGroup } = Select;
const { Title } = Typography;
interface IProps {
  value?: string;
  onChange?: (value: string) => void;
}

const JobCategory: React.FC<IProps> = ({ value, onChange }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  console.log(value);
  useEffect(() => {
    let mounted = true;
    (() => {
      suggestionApi.getAllCategories().then((data) => {
        if (mounted) {
          setCategories(data);
          console.log(data);
        }
      });
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <Title level={5}>Job category</Title>
      <Select
        mode='multiple'
        allowClear
        defaultValue='lucy'
        size='large'
        value={value}
        onChange={onChange}
      >
        {categories.map((cat) => (
          <OptGroup key={cat._id} label={cat.name}>
            {cat.subcategories.map((sub) => (
              <Option key={sub._id} value={sub._id}>
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
