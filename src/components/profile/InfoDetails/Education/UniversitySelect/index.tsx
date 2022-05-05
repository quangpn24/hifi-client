import { Select } from 'antd';
import suggestionApi from 'api/suggestionApi';
import React, { useEffect, useState } from 'react';

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};
const { Option } = Select;
const UniversitySelect = ({ value, onChange }: Props) => {
  const [universities, setUniversities] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;
    suggestionApi
      .getUniversities()
      .then((data) => mounted && setUniversities(data))
      .catch((err) => console.log('get Universities: ', err));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Select
      showSearch
      placeholder={'Instituation'}
      defaultActiveFirstOption={false}
      optionFilterProp='children'
      filterOption={(input, option: any) =>
        (option?.children as string)?.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      onChange={onChange}
      notFoundContent={null}
      value={value}
    >
      {universities.map((s) => (
        <Option key={s}>{s}</Option>
      ))}
    </Select>
  );
};

export default UniversitySelect;
