import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

type Props = {
  defaultValue?: string | number;
  onChange?: Function;
  options?: Array<Option>;
  placeholder?: string;
  onSearch?: Function;
  width?: string;
};

type Option = {
  label: string;
  value: string | number;
};
const Filter = (props: Props) => {
  const handleChange = (value: string | number) => {
    if (props.onChange) {
      props.onChange(value);
    }
  };
  const handleSearch = (value: string | number) => {
    if (props.onSearch) {
      props.onSearch(value);
    }
  };
  const renderOptions = () => {
    if (props.options?.length) {
      return props.options.map((data) => {
        return (
          <Option key={data.value} value={data.value}>
            {data.label}
          </Option>
        );
      });
    }
    return null;
  };

  let optionRendered = renderOptions();

  return (
    <Select
      showSearch
      placeholder={props.placeholder}
      optionFilterProp='children'
      style={{ width: props.width || '100%' }}
      onChange={handleChange}
      onSearch={handleSearch}
      filterOption={(input, option: any) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      defaultValue={props.defaultValue}
    >
      {optionRendered}
    </Select>
  );
};

export default Filter;
