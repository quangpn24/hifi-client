import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Col, Form, Input, message, Row } from 'antd';
import { DEFAULT_IMAGE } from 'constant';
import { validateMessages } from 'constant/validateMessages';
import { auth } from 'firebase';
import { signInWithGoogle, signUpWithEmailPassword } from 'firebase/services';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAppDispatch } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const handleRegisterFormSubmit = async (data: any) => {
    const { email, password, name } = data;
    setLoading(true);
    const { user, error } = await signUpWithEmailPassword(email, password);
    if (!error && user) {
      try {
        const result = await dispatch(
          authActions.register({ ...user, displayName: name, photoURL: DEFAULT_IMAGE })
        );
        await unwrapResult(result);
        message.info('Sign up successfully', 1000);
      } catch (errorLogin: any) {
        auth.currentUser?.delete();
        message.error(errorLogin.message);
      }
    } else {
      message.error(error);
    }
    setLoading(false);
  };

  return (
    <div className='bg-white-color h-screen'>
      <Row justify='center' align='middle' className='h-full'>
        <Form
          onFinish={handleRegisterFormSubmit}
          layout='vertical'
          validateMessages={validateMessages}
        >
          <div className='mb-8'>
            <p className='text-base font-normal mb-1'>Welcome to Hifi</p>
            <h3 className='text-3xl font-bold'>Sign Up Your Account</h3>
          </div>

          <Col span={24}>
            <Form.Item label='Name' name='name' rules={[{ required: true }]}>
              <Input placeholder='John' />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true }, { type: 'email', message: 'Invalid email' }]}
            >
              <Input placeholder='John.snow@gmail.com' />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label='Password' name='password' rules={[{ required: true }]}>
              <Input placeholder='******' type={'password'} />
            </Form.Item>
          </Col>

          <div className='flex flex-col justify-between'>
            <Button
              type='primary'
              size='large'
              block
              className='mb-8'
              htmlType='submit'
              loading={loading}
            >
              Sign Up With Email
            </Button>

            <Button
              className='flex items-center justify-center'
              size='large'
              block
              icon={<FcGoogle className='mr-4' />}
              onClick={signInWithGoogle}
            >
              Sign In with google
            </Button>
          </div>
        </Form>
      </Row>
    </div>
  );
};

export default RegisterForm;
