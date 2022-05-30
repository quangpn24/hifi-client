import { BadgeCheckIcon, ExclamationCircleIcon } from '@heroicons/react/solid';
import { Button, Card, Form, Input, message, Spin } from 'antd';
import emailApi from 'api/emailApi';
import userApi from 'api/userApi';
import axios from 'axios';
import React, { useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';

type Props = {};

const LoginDetails = (props: Props) => {
  const user = useAppSelector(selectUser);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [sendSuccessful, setSendSuccessful] = useState(false);
  const [form] = Form.useForm();
  const handleSendVerifyEmail = async () => {
    try {
      setVerifyLoading(true);
      await emailApi.sendAccountVerificationEmail(user?.email!);
      setSendSuccessful(true);
      message.success('Verification email has been sent!');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        message.error(error?.response?.data.message);
      } else {
        message.error('Failed to send verification email');
      }
    }
    setVerifyLoading(false);
  };

  const onFinish = async (values: any) => {
    if (values.password !== values.confirmPassword) {
      form.setFields([
        {
          name: 'confirmPassword',
          errors: ['Passwords do not match'],
        },
      ]);
      return;
    }

    try {
      await userApi.updateMe({ password: values.password });
      message.success('Password updated successfully');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        message.error(error?.response?.data.message);
      } else {
        message.error('Failed to update password');
      }
    }
  };
  return (
    <div className='px-16'>
      <Card title={'Change password'.toUpperCase()}>
        <Form onFinish={onFinish} form={form}>
          <div className='flex space-x-8'>
            <Form.Item
              name={'password'}
              requiredMark={false}
              rules={[
                {
                  required: true,
                  message: 'Please enter your password',
                },
                {
                  validator: (_, value) => {
                    if (value && value.length < 6) {
                      return Promise.reject('Password must be at least 6 characters');
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input.Password placeholder='Enter your password' />
            </Form.Item>
            <Form.Item
              name={'confirmPassword'}
              requiredMark={false}
              rules={[
                {
                  required: true,
                  message: 'Please enter your password',
                },
              ]}
            >
              <Input.Password placeholder='Confirm your new password' />
            </Form.Item>
          </div>
          <Button className='mt-4' htmlType='submit' type='primary' loading={updateLoading}>
            Change password
          </Button>
        </Form>
      </Card>
      <Card title={'Verify Email'.toUpperCase()} className='!mt-8'>
        <h3 className='flex items-center'>
          {user?.isVerified && <BadgeCheckIcon className='w-5 h-5 text-success-color mr-1' />}
          <span>{user?.email}</span>
        </h3>
        {user?.isVerified && <p>Account is verified</p>}
        {!verifyLoading ? (
          <>
            {!user?.isVerified && (
              <>
                <div className='flex items-center'>
                  <ExclamationCircleIcon className='w-5 h-5 text-error-color mr-1' />
                  <p className='!mb-0'>Your email address is not yet verified.</p>
                </div>
                {sendSuccessful && (
                  <p>
                    Verification email has been sent to binzml1714@gmail.com! Please check your
                    inbox or junk mail. {`Didn't`} receive the email? <Button />
                  </p>
                )}
              </>
            )}
            {!sendSuccessful && !user?.isVerified && (
              <Button className='mt-4' type='text' onClick={handleSendVerifyEmail}>
                Verify Email
              </Button>
            )}
          </>
        ) : (
          <Spin spinning={verifyLoading} tip='Sending email verification...' />
        )}
      </Card>
    </div>
  );
};

export default LoginDetails;
