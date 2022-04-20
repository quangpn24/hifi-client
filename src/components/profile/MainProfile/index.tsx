import { EditOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import React from 'react';
import Avatar from '../Avatar';
import InfoDetails from '../InfoDetails';
import InfoItem from '../InfoItem';
import PersonalInfo from '../PersonalInfo';
import ViewStatistic from '../ViewStatistic';

type Props = {};

const MainProfile = (props: Props) => {
  return (
    <div>
      <PersonalInfo />
      <ViewStatistic />
      <InfoDetails />
    </div>
  );
};

export default MainProfile;
