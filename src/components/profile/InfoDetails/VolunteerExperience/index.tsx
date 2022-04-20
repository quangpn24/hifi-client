import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Divider, Space } from 'antd';
import Header from '../Header';
import CustomDivider from '../Divider';
import SegmentItem from '../SegmentItem';
type Props = {};

const VolunteerExperience = (props: Props) => {
  return (
    <div className='mb-8'>
      <Header
        text={'ORGANIZATIONAL & VOLUNTEERING EXPERIENCES'.toUpperCase()}
        action={
          <Button icon={<EditOutlined />} type='text'>
            ADD EXPERIENCE
          </Button>
        }
      />
      <Divider className='!my-2' />
      {/* <p className='my-4'>{content}</p> */}
      <div className='mt-4 p-1'>
        <SegmentItem
          title='Mùa hè xanh - Team lập trình web'
          subtitle='Tình nguyện viên'
          timeline='February 2022 - Present (2 months)'
          onEdit={() => {}}
          onDelete={() => {}}
        />
        <SegmentItem
          title='Mùa hè xanh - Team lập trình web'
          subtitle='Tình nguyện viên'
          timeline='February 2022 - Present (2 months)'
          onEdit={() => {}}
          onDelete={() => {}}
        />
        <SegmentItem
          title='Mùa hè xanh - Team lập trình web'
          subtitle='Tình nguyện viên'
          timeline='February 2022 - Present (2 months)'
          onEdit={() => {}}
          onDelete={() => {}}
        />
      </div>
    </div>
  );
};

export default VolunteerExperience;
