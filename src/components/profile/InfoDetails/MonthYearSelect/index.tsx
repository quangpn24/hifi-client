import { Col, Row, Select } from 'antd';
import React from 'react';

var monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const { Option } = Select;

const years = new Array(40)
  .fill(0)
  .map((_, index) => index + 1990)
  .sort((a, b) => b - a);
type MonthYear = {
  month?: number;
  year?: number;
};
interface IProps {
  value?: MonthYear;
  onChange?: (_: MonthYear) => void;
  defaultValue?: Date;
  disabled?: boolean;
}

const MonthYearSelect: React.FC<IProps> = ({ value, onChange, disabled, defaultValue }) => {
  const handleChange = (type: 'month' | 'year', newValue: any) => {
    onChange?.({ ...value, [type]: newValue });
  };
  return (
    <div className='flex'>
      <Select
        placeholder='Month'
        className='!mr-2'
        defaultValue={defaultValue?.getMonth()}
        disabled={disabled}
        value={value?.month}
        onChange={(value) => handleChange('month', value)}
      >
        {monthNames.map((month, index) => (
          <Option key={month} value={index}>
            {month}
          </Option>
        ))}
      </Select>
      <Select
        placeholder='Year'
        onChange={(value) => handleChange('year', value)}
        defaultValue={defaultValue?.getFullYear()}
        disabled={disabled}
        value={value?.year}
      >
        {years.map((year) => (
          <Option key={year} value={year}>
            {year}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default MonthYearSelect;
