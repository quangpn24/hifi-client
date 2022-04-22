import { Input, Select } from 'antd';
import React from 'react';

type Props = {
  jobs: string[];
  value?: Partial<InterestField>;
  onChange?: (value?: Partial<InterestField>) => void;
};
type ChangeType = keyof InterestField;
const { Option } = Select;
const FieldsInput = ({ value, jobs, onChange }: Props) => {
  const handleChange = (type: ChangeType, newValue: any) => {
    if (!value) {
      onChange?.({ [type]: newValue });
      return;
    }
    onChange?.({ ...value, [type]: newValue });
  };
  return (
    <div className='w-full'>
      <Select
        value={value?.job}
        placeholder='Select job'
        onChange={(value) => handleChange('job', value)}
      >
        {jobs.map((j) => (
          <Option key={j} value={j}>
            {j}
          </Option>
        ))}
      </Select>
      <Input
        className='!mt-2'
        placeholder="Role that you're most interested in"
        value={value?.role}
        onChange={(e) => handleChange('role', e.target.value)}
      />
    </div>
  );
};

export default FieldsInput;
