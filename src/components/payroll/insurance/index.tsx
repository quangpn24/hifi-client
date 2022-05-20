import { Form, InputNumber, Select } from 'antd';
import React from 'react';

const { Option } = Select;

export const Insurance = () => {
  return (
    <div>
      <Form.Item
        className='!text-sm !text-[#5d677a]'
        label='Type of labor'
        name='typeOfLabor'
        initialValue='trained'
      >
        <Select>
          <Option value='trained'>Trained</Option>
          <Option value='unTrained'>Un Trained</Option>
        </Select>
      </Form.Item>

      <Form.Item
        className='!text-sm !text-[#5d677a]'
        label='Social insurance'
        name='socialInsurance'
        initialValue={8.0}
      >
        <InputNumber
          className='!w-full'
          disabled={true}
          controls={false}
          min={0}
          max={100}
          defaultValue={8.0}
          step={0.1}
          formatter={(value) => `${value}%`}
          parser={(value: any) => value.replace('%', '')}
        />
      </Form.Item>

      <Form.Item
        className='!text-sm !text-[#5d677a]'
        label='Health insurance'
        name='healthInsurance'
        initialValue={1.5}
      >
        <InputNumber
          className='!w-full'
          disabled={true}
          controls={false}
          min={0}
          max={100}
          defaultValue={1.5}
          step={0.1}
          formatter={(value) => `${value}%`}
          parser={(value: any) => value.replace('%', '')}
        />
      </Form.Item>

      <Form.Item
        className='!text-sm !text-[#5d677a]'
        label='Unemployment'
        name='unemployment'
        initialValue={1.0}
      >
        <InputNumber
          className='!w-full'
          disabled={true}
          controls={false}
          min={0}
          max={100}
          defaultValue={1.0}
          step={0.1}
          formatter={(value) => `${value}%`}
          parser={(value: any) => value.replace('%', '')}
        />
      </Form.Item>
    </div>
  );
};
