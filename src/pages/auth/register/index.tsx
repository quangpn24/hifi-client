import { Col, Row } from 'antd';
import SideBar from 'components/commons/SideBar';
import RegisterForm from 'components/register/RegisterForm';
import { NextPage } from 'next';
import React from 'react';

const RegisterPage: NextPage = () => {
  return (
    <Row className='rounded-md'>
      <Col span={8}>
        <SideBar />
      </Col>
      <Col span={16}>
        <RegisterForm />
      </Col>
    </Row>
  );
};

export default RegisterPage;
