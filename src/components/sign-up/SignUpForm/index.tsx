import { Button, Col, Form, Input, Row } from 'antd';
import { validateMessages } from 'constant/validateMessages';
import { signInWithGoogle } from 'firebase/services';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignUpForm = () => {
  const [form] = Form.useForm();

  const handleSignUp = (data: any) => {
    console.log({ data });
  };

  return (
    <div className='bg-white-color h-screen'>
      <Row justify='center' align='middle' className='h-full'>
        <Form
          onFinish={handleSignUp}
          form={form}
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
            <Form.Item label='Email' name='email' rules={[{ required: true }]}>
              <Input placeholder='John.snow@gmail.com' />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label='Password' name='password' rules={[{ required: true }]}>
              <Input placeholder='******' />
            </Form.Item>
          </Col>

          <div className='flex flex-col justify-between'>
            <Button type='primary' size='large' block className='mb-8' htmlType='submit'>
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

export default SignUpForm;
