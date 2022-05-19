import { Select } from 'antd';
import suggestionApi from 'api/suggestionApi';
import React, { useEffect, useState } from 'react';

type Props = {
  value?: string;
  onChange?: (value: string) => void;
};
const { Option } = Select;
const DegreeSelect = ({ value, onChange }: Props) => {
  const [degrees, setDegrees] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;

    suggestionApi
      .getDegrees()
      .then((data) => mounted && setDegrees(data))
      //TODO: toast error
      .catch((err) => console.log('getDegrees Error: ', err));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Select
      showSearch
      placeholder={'Degree'}
      defaultActiveFirstOption={false}
      optionFilterProp='children'
      filterOption={(input, option: any) =>
        (option?.children as string)?.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      value={value}
      onChange={onChange}
      notFoundContent={null}
    >
      {degrees.map((s) => (
        <Option key={s}>{s}</Option>
      ))}
    </Select>
  );
};

export default DegreeSelect;
