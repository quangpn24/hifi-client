import { Col, Layout, Row } from 'antd';
import awardApi from 'api/awardApi';
import MainProfile from 'components/profile/MainProfile';
import ToolSidebar from 'components/profile/ToolSidebar';
import { requireAuth } from 'hoc/requireAuth';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { Award } from 'types';

type Props = {
  awards?: Award[];
};
const { Header, Content, Footer } = Layout;
const ProfilePage: NextPage<Props> = ({ awards }: Props) => {
  console.log('awards: ', awards);
  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Row
          gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
          className='px-24 pt-6'
          style={{ backgroundColor: 'rgb(251, 251, 251)' }}
        >
          <Col lg={16} md={24}>
            <MainProfile />
          </Col>
          <Col lg={8} md={24}>
            <ToolSidebar />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = requireAuth(async ({ req }) => {
  try {
    const data = await awardApi.getAwards();

    console.log('Micc check', data);
    return {
      props: {
        awards: data,
      },
    };
  } catch (error: any) {
    console.log('Error: ', error?.response?.data ?? error.message);
    return {
      props: {
        awards: null,
      },
    };
  }
});

export default ProfilePage;
