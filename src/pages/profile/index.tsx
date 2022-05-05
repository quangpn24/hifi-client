import { Col, Layout, Row } from 'antd';
import awardApi from 'api/awardApi';
import MainProfile from 'components/profile/MainProfile';
import ToolSidebar from 'components/profile/ToolSidebar';
import { requireAuth } from 'hoc/requireAuth';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

type Props = {
  awards?: Award[];
};
const { Header, Content, Footer } = Layout;
const ProfilePage: NextPage<Props> = () => {
  return (
    <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} className='py-6'>
      <Col lg={16} md={24}>
        <MainProfile />
      </Col>
      <Col lg={8} md={24}>
        <ToolSidebar />
      </Col>
    </Row>
  );
};

export default ProfilePage;
