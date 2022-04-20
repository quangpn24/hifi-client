import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { PaperClipIcon } from '@heroicons/react/outline';
import { Button, Divider } from 'antd';
import Header from '../Header';

type Props = {};

const ResumeSection = ({}: Props) => {
  return (
    <div className='mb-8'>
      <Header
        text={'Resume'.toUpperCase()}
        action={
          <Button icon={<EditOutlined />} type='text'>
            Edit
          </Button>
        }
      />
      <Divider className='!my-2' />
      <div className='mt-4'>
        <div className='flex items-center'>
          <PaperClipIcon className='h-5 w-5 mr-2' />
          <p className='!mb-0'>1e5def02b2fdcebda509ffc5005a1d7a.pdf</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
