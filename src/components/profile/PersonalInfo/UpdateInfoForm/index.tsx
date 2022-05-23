import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { Button, DatePicker, Form, Input, message, Radio } from 'antd';
import emailApi from 'api/emailApi';
import axios from 'axios';
import { validateMessages } from 'constant/validateMessages';
import dayjs from 'dayjs';
import React, { useImperativeHandle, useState } from 'react';
import { User } from 'types';
import Avatar from '../Avatar';
interface IProps {
  user?: User;
  formType?: 'update' | 'create';
  onSubmit?: (values: Education) => void;
}
const UpdateInfoForm = React.forwardRef<any, IProps>(({ onSubmit, user, formType }, ref) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

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

  const handleSendVerifyEmail = async () => {
    try {
      setLoading(true);
      await emailApi.sendAccountVerificationEmail(user?.email!);
      message.success('Verification email has been sent!');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        message.error(error?.response?.data.message);
      } else {
        message.error('Failed to send verification email');
      }
    }
    setLoading(false);
  };
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
          <span className={user?.isVerified ? 'text-success-color' : 'text-red-500'}>
            {user?.isVerified ? '(Verified)' : '(Unverified)'}
          </span>
        </p>
        <h3>{user?.email}</h3>
        {!user?.isVerified && (
          <>
            <div className='flex items-center'>
              <ExclamationCircleIcon className='w-4 h-4 mr-1 text-red-500' />
              <p className='!mb-0'>Your email address is not yet verified.</p>
            </div>
            <Button
              type='text'
              onClick={handleSendVerifyEmail}
              loading={loading}
              className='text-primary-color'
            >
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
          {
            validator: (rule, value) => {
              if (value && !/^\d{10}$/.test(value)) {
                return Promise.reject('Phone number must be 10 digits');
              }
              return Promise.resolve();
            },
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
