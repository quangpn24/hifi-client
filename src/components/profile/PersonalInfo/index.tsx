import { EditOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import Avatar from '../Avatar';
import InfoItem from '../InfoItem';

type Props = {};

const PersonalInfo = (props: Props) => {
  const user = useAppSelector(selectUser);
  return (
    <div className='bg-white shadow-md rounded-md'>
      <Row className='p-4' gutter={[8, 16]}>
        <Col lg={5} md={24} className='flex items-center justify-center'>
          <Avatar image='https://picsum.photos/200' />
        </Col>
        <Col lg={17} md={24}>
          <h3 className='text-xl font-bold'>{user?.name}</h3>
          <Row gutter={[0, 24]}>
            <Col span={12}>
              <InfoItem label='Phone Number' value={user?.phoneNumber} />
              <InfoItem label='Address' value={user?.location} />
              <InfoItem label='Nationality' value={user?.nationality} />
            </Col>
            <Col span={12}>
              <InfoItem label='Email' value={user?.email} />
              <InfoItem label='Age' value={user?.age} />
              <InfoItem label='Gender' value={user?.phoneNumber} />
            </Col>
          </Row>
        </Col>
        <Col lg={1} md={24}>
          <Button icon={<EditOutlined style={{ fontSize: '130%' }} />} />
        </Col>
      </Row>
    </div>
  );
};

export default PersonalInfo;
