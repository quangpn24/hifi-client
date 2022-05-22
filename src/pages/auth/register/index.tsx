import { Col, Row } from 'antd';
import SideBar from 'components/commons/SideBar';
import RegisterForm from 'components/register/RegisterForm';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAppSelector } from 'redux/hooks';

const RegisterPage: NextPage = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const router = useRouter();
  useEffect(() => {
    if (accessToken) {
      const redirectUrl = (router.query.redirect_url as string)?.startsWith('/')
        ? router.query.redirect_url
        : '/';
      router.push(redirectUrl as string);
    }
  }, [accessToken, router]);
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
