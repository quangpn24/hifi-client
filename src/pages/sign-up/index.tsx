import { Col, Row } from 'antd';
import { SideBar } from 'components/sign-up/SideBar';
import SignUpForm from 'components/sign-up/SignUpForm';
import { NextPage } from 'next';
import React from 'react';

const SignUpPage: NextPage = () => {
  return (
    <Row className='rounded-md'>
      <Col span={6}>
        <SideBar />
      </Col>
      <Col span={18}>
        <SignUpForm />
      </Col>
    </Row>
  );
};

export default SignUpPage;
