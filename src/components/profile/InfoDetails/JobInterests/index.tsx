import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import Header from '../Header';
import Interest from './Interest';
import Item from './Item';
import FieldsOfInterest from './FieldsOfInterest';
import InterestSection from './InterestSection';

type Props = {};

const JobInterestsData = {
  willingRemote: true,
  preferedWorkLocations: [
    {
      id: 1,
      text: 'Ho Chi Minh City, Vietnam',
    },
    {
      id: 2,
      text: 'Jakarta, Indonesia',
    },
  ],
  typeOfOpportunities: [
    {
      id: 1,
      text: 'Full-Time',
    },
    {
      id: 2,
      text: 'Part-Time',
    },
  ],
};
const JobInterests = ({}: Props) => {
  return (
    <div className='mb-8'>
      <Header
        text={'JOB INTERESTS & PREFERENCES'.toUpperCase()}
        action={
          <Button icon={<EditOutlined />} type='text'>
            Edit
          </Button>
        }
      />
      <Divider className='!my-2' />
      {/* <p className='my-4'>{content}</p> */}
      <div className='mt-4 gap-y-4'>
        <FieldsOfInterest />
        <div className='h-4' />
        <InterestSection
          label='Type of Opportunity'
          type='list'
          data={JobInterestsData.typeOfOpportunities}
        />
        <div className='h-4' />
        <InterestSection label='Salary Expectation' type='text' data={'USD 100,000'} />
        <div className='h-4' />
        <InterestSection
          label='Work Location Preference'
          type='text'
          data={JobInterestsData.willingRemote ? 'Yes' : 'No'}
        />
      </div>
    </div>
  );
};

export default JobInterests;
