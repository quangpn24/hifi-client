import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { Button, Checkbox, Col, DatePicker, Form, Input, Radio, Row, Select } from 'antd';
import userApi from 'api/userApi';
import { validateMessages } from 'constant/validateMessages';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useImperativeHandle, useState } from 'react';
import Utils from 'utils';
import Avatar from '../Avatar';

const { TextArea } = Input;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
interface IProps {
  user?: User;
  formType?: 'update' | 'create';
  onSubmit?: (values: Education) => void;
}
const UpdateInfoForm = React.forwardRef<any, IProps>(({ onSubmit, user, formType }, ref) => {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    submit() {
      form.submit();
    },
    resetFields() {
      form.resetFields();
    },
  }));

  const onFinish = async (data: any) => {
    onSubmit?.(data);
  };

  const handleSendVerifyEmail = async () => {};
  return (
    <Form
      form={form}
      labelAlign='left'
      validateMessages={validateMessages}
      onFinish={onFinish}
      layout='vertical'
      initialValues={{
        ...user,
        birthDate: dayjs(user?.birthDate),
      }}
    >
      <div className='flex justify-center'>
        <Form.Item name='photoFile' wrapperCol={{ span: 24 }}>
          <Avatar canUpdate={true} image={user?.photoUrl} />
        </Form.Item>
      </div>

      <div className='mb-1'>
        <p className='!mb-1'>
          Email{' '}
          <span className='text-primary-color'>
            {user?.isVerified ? '(Verified)' : '(Unverified)'}
          </span>
        </p>
        <h3>{user?.email}</h3>
        {!user?.isVerified && (
          <>
            <div className='flexf'>
              <ExclamationCircleIcon className='w-5 h-5' />
              <p>Your email address is not yet verified.</p>
            </div>
            <Button type='text' onClick={handleSendVerifyEmail} className='text-primary-color'>
              Verify email
            </Button>
          </>
        )}
      </div>

      <Form.Item
        label='Full Name'
        name='name'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Phone Number'
        name='phoneNumber'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Input placeholder='Phone Number' />
      </Form.Item>
      <Form.Item
        label='Address'
        name='address'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Date of birth'
        name='birthDate'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label='Gender'
        name='gender'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Radio.Group>
          <Radio value={'MALE'}>Male</Radio>
          <Radio value={'FEMALE'}>Female</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
});
UpdateInfoForm.displayName = 'UpdateInfoForm';
export default UpdateInfoForm;
