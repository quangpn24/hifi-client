import { LeftOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import InfoDetails from 'components/profile/preview/InfoDetails';
import PersonalInfo from 'components/profile/preview/PersonalInfo';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

type Props = {
  awards?: Award[];
};
const ProfilePreviewPage: NextPage<Props> = () => {
  return (
    <div className='py-6'>
      <Link href='/profile'>
        <a>
          <Button icon={<LeftOutlined />} className='mb-4'>
            Back
          </Button>
        </a>
      </Link>
      <PersonalInfo />
      <InfoDetails />
    </div>
  );
};

export default ProfilePreviewPage;
