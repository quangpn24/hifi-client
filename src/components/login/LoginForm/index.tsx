import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Col, Form, Input, message, Radio, Row } from 'antd';
import { validateMessages } from 'constant/validateMessages';
import { signInWithEmailPassword, signInWithGoogle } from 'firebase/services';
import Link from 'next/link';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
import { selectUser } from 'redux/selectors';

const defaultFormValue = {
  email: '',
  password: '',
};
const LoginForm = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);

  const handleLogin = async ({ email, password }: any) => {
    setLoading(true);
    const { user, error } = await signInWithEmailPassword(email, password);

    if (!error && user) {
      try {
        const result = await dispatch(authActions.login(user));
        await unwrapResult(result);
        message.success('Login successfully!');
      } catch (errorLogin: any) {
        setLoading(false);
        message.error(errorLogin.message);
      }
    } else {
      message.error(error);
    }
  };
  const onFinishFailed = (data: any) => {};

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error, user } = await signInWithGoogle();
    if (error || !user) {
      error && message.error(error);
      return;
    }
    try {
      const result = await dispatch(authActions.login(user));
      await unwrapResult(result);
      message.success('Login successfully!');
    } catch (errorLogin: any) {
      message.error(errorLogin.message);
    }
    setLoading(false);
  };

  return (
    <div className='bg-white-color h-screen'>
      <Row justify='center' align='middle' className='h-full'>
        <Form
          onFinish={handleLogin}
          layout='vertical'
          onFinishFailed={onFinishFailed}
          validateMessages={validateMessages}
          initialValues={defaultFormValue}
          validateTrigger={'onBlur'}
        >
          <div className='mb-8'>
            <p className='text-base font-normal mb-1'>Welcome back</p>
            <h3 className='text-3xl font-bold'>Login to your account</h3>
          </div>

          <Col span={24}>
            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true }, { type: 'email', message: 'Invalid email' }]}
            >
              <Input placeholder='John.snow@gmail.com' type={'email'} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label='Password' name='password' rules={[{ required: true }]}>
              <Input placeholder='******' type={'password'} />
            </Form.Item>
          </Col>

          <div className='flex justify-between mb-12'>
            <Radio>Remember me</Radio>
            <a>Forgot password</a>
          </div>

          <div className='flex flex-col justify-between'>
            <Button size='large' block className='mb-8' htmlType='submit' loading={loading}>
              Login
            </Button>
            <Button
              className='flex items-center justify-center'
              size='large'
              block
              icon={<FcGoogle className='mr-4' />}
              onClick={handleGoogleLogin}
            >
              Sign in with google
            </Button>
          </div>
          <p className='mt-4'>
            {"Don't"} have an account?{' '}
            <Link href={'/auth/register'}>
              <a className='text-blue-600'>Join free today</a>
            </Link>
          </p>
        </Form>
      </Row>
    </div>
  );
};

export default LoginForm;
