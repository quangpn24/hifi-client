import { Button, Col, Form, Input, Radio, Row } from 'antd';
import { validateMessages } from 'constant/validateMessages';
import { signInWithGoogle } from 'firebase/services';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

type Props = {};

export const LoginForm = ({}: Props) => {
  const [form] = Form.useForm();

  const handleLogin = (data: any) => {
    console.log({ data });
  };

  return (
    <div className='bg-white-color h-screen'>
      <Row justify='center' align='middle' className='h-full'>
        <Form
          form={form}
          onFinish={handleLogin}
          layout='vertical'
          validateMessages={validateMessages}
        >
          <div className='mb-8'>
            <p className='text-base font-normal mb-1'>Welcome back</p>
            <h3 className='text-3xl font-bold'>Login to your account</h3>
          </div>

          <Col span={24}>
            <Form.Item label='Email' name='email' rules={[{ required: true }]}>
              <Input placeholder='John.snow@gmail.com' />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label='Password' name='password' rules={[{ required: true }]}>
              <Input placeholder='******' />
            </Form.Item>
          </Col>

          <div className='flex justify-between mb-12'>
            <Radio>Remember me</Radio>
            <a>Forgot password</a>
          </div>

          <div className='flex flex-col justify-between'>
            <Button size='large' block className='mb-8' htmlType='submit'>
              Login
            </Button>
            <Button
              className='flex items-center justify-center'
              size='large'
              block
              icon={<FcGoogle className='mr-4' />}
              onClick={signInWithGoogle}
            >
              Sign in with google
            </Button>
          </div>
        </Form>
      </Row>
    </div>
  );
};
