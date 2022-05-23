import { Col, Row } from 'antd';
import InfoItem from 'components/profile/InfoItem';
import { DEFAULT_IMAGE } from 'constant';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
type Props = {};

const PersonalInfo = (props: Props) => {
  const user = useAppSelector(selectUser);
  return (
    <>
      <div className='bg-white shadow-md rounded-md'>
        <Row className='p-4' gutter={16}>
          <Col>
            <div
              className='flex items-center justify-center bg-red-700'
              style={{ borderRadius: '50%', overflow: 'hidden' }}
            >
              <div className='h-36 w-36 ' style={{ borderRadius: '50%' }}>
                <Image
                  src={user?.photoUrl || DEFAULT_IMAGE}
                  alt='avatar-user'
                  loading='lazy'
                  layout='responsive'
                  width={170}
                  height={170}
                />
              </div>
            </div>
          </Col>
          <Col lg={17} md={24}>
            <h3 className='text-xl font-bold'>{user?.name}</h3>
            <Row gutter={[0, 24]}>
              <Col span={12}>
                <InfoItem label='Phone Number' value={user?.phoneNumber} />
                <InfoItem label='Address' value={user?.address} />
                <InfoItem label='Gender' value={user?.gender} />
              </Col>
              <Col span={12}>
                <InfoItem
                  label={`Email ${user?.isVerified ? '(Verified)' : '(Unverified)'}`}
                  value={user?.email}
                />
                <InfoItem
                  label='Age'
                  value={`${dayjs(user?.birthDate).fromNow(true)} old, ${
                    user?.gender === 'FEMALE' ? 'Female' : 'Male'
                  }`}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PersonalInfo;
