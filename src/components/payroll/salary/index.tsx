import { Form, InputNumber } from 'antd';
import React from 'react';

export const Salary = () => {
  return (
    <div>
      <Form.Item
        className='!text-sm !text-[#5d677a]'
        label='Total salary'
        name='totalSalary'
        rules={[{ required: true }]}
        initialValue={0}
      >
        <InputNumber
          className='!w-full'
          placeholder='Typing total salary'
          controls={false}
          formatter={(value: any) => Intl.NumberFormat('en-US').format(value)}
          maxLength={17}
        />
      </Form.Item>

      <Form.Item
        className='!text-sm !text-[#5d677a]'
        label='Subsidize'
        name='subsidize'
        initialValue={0}
      >
        <InputNumber
          className='!w-full'
          placeholder='Typing subsidize'
          controls={false}
          formatter={(value: any) => Intl.NumberFormat('en-US').format(value)}
          maxLength={17}
        />
      </Form.Item>
    </div>
  );
};
