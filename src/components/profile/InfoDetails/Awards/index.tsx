import { EditOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import { NextPage } from 'next';
import React from 'react';
import { Award } from 'types';
import Header from '../Header';
import SegmentItem from '../SegmentItem';
type Props = {
  awards?: Award[];
};

const AwardsSection: React.FC<Props> = ({ awards }: Props) => {
  console.log('Awards: ', awards);
  return (
    <div className='mb-8'>
      <Header
        text={'AWARDS'.toUpperCase()}
        action={
          <Button icon={<EditOutlined />} type='text'>
            ADD AN AWARDS
          </Button>
        }
      />
      <Divider className='!my-2' />
      {/* <p className='my-4'>{content}</p> */}
      <div className='mt-4 p-1'>
        <SegmentItem
          title='Webdev Hackathon'
          subtitle='Software Engineering'
          timeline='February 2022 - Present (2 months)'
          onEdit={() => {}}
          onDelete={() => {}}
        />
        <SegmentItem
          title='Webdev Hackathon'
          subtitle='Software Engineering'
          timeline='February 2022 - Present (2 months)'
          onEdit={() => {}}
          onDelete={() => {}}
          descrition='
          Mic check
          Mic check
          Mic check
          Mic check
          '
        />
        <SegmentItem
          title='Webdev Hackathon'
          subtitle='Software Engineering'
          timeline='February 2022 - Present (2 months)'
          onEdit={() => {}}
          onDelete={() => {}}
          last
        />
      </div>
    </div>
  );
};

export default AwardsSection;
