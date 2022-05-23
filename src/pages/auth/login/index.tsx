import { Col, Row } from 'antd';
import SideBar from 'components/commons/SideBar';
import LoginForm from 'components/login/LoginForm';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAppSelector } from 'redux/hooks';

type Props = {};

const LoginPage: NextPage<Props> = () => {
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
        <LoginForm />
      </Col>
    </Row>
  );
};

export default LoginPage;
