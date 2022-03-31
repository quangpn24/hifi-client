import { Col, Row } from 'antd';
import { LoginForm } from 'components/login/LoginForm';
import { SideBar } from 'components/login/SideBar';
import { signInWithGoogle } from 'firebase/services';
import { NextPage } from 'next';
import React from 'react';

type Props = {};

const LoginPage: NextPage<Props> = () => {
  return (
    <Row className='rounded-md'>
      <Col span={6}>
        <SideBar />
      </Col>
      <Col span={18}>
        <LoginForm />
      </Col>
    </Row>
  );
};

export default LoginPage;
