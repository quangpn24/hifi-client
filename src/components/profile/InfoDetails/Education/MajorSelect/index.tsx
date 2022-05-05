import { Select } from 'antd';
import suggestionApi from 'api/suggestionApi';
import React, { useEffect, useState } from 'react';

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};
const { Option } = Select;
const MajorSelect = ({ value, onChange }: Props) => {
  const [majors, setMajors] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;

    suggestionApi
      .getMajors()
      .then((data) => mounted && setMajors(data))
      .catch((err) => console.log('getMajors Error: ', err));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Select
      showSearch
      placeholder={'Field of Study'}
      defaultActiveFirstOption={false}
      optionFilterProp='children'
      filterOption={(input, option: any) =>
        (option?.children as string)?.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      onChange={onChange}
      value={value}
      notFoundContent={null}
    >
      {majors.map((s) => (
        <Option key={s}>{s}</Option>
      ))}
    </Select>
  );
};

export default MajorSelect;
