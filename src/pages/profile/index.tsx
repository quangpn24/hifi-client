import { Col, Layout, Row } from 'antd';
import InfoDetails from 'components/profile/InfoDetails';
import PersonalInfo from 'components/profile/PersonalInfo';
import ToolSidebar from 'components/profile/ToolSidebar';
import ProfileOverviewProvider from 'context/ProfileContext';
import { NextPage } from 'next';
import React from 'react';

type Props = {
  awards?: Award[];
};
const ProfilePage: NextPage<Props> = () => {
  return (
    <div className='py-6'>
      <ProfileOverviewProvider>
        <Row gutter={[16, 16]}>
          <Col lg={16} xs={24}>
            <PersonalInfo />
          </Col>
          <Col lg={8} xs={24}>
            <ToolSidebar />
          </Col>
        </Row>
        <InfoDetails />
      </ProfileOverviewProvider>
    </div>
  );
};

export default ProfilePage;
