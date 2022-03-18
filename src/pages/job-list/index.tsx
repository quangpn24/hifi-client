import { Col, Row, Input, Select } from 'antd';
import JobCardItem from 'components/JobSeeker/JobList/JobCardItem';
import JobDetails from 'components/JobSeeker/JobList/JobDetails';
import React from 'react';

const { Search } = Input;
type Props = {};

const Jobs = (props: Props) => {
  const options = [
    {
      lable: '123',
      value: 1,
    },
    {
      lable: '1234',
      value: 2,
    },
    {
      lable: '12s3',
      value: 3,
    },
    {
      lable: 'ds123',
      value: 4,
    },
  ];
  return (
    <Row>
      <Row gutter={20} className='w-full px-[100px]'>
        <Col span={24}>
          <h1 className='text-[2rem] my-[20px]'>Search jobs, companies, ...</h1>
        </Col>
        <Col span={24}>
          <div className=' w-2/5 mb-[20px]'>
            <Search
              className=' shadow-md'
              placeholder='Search for job title'
              allowClear
              size='large'
              enterButton='Search'
            />
          </div>
        </Col>
        <Col span={3}>
          <Select placeholder='filter' options={options} onChange={() => {}} />
        </Col>
      </Row>
      <Row className='w-full mt-[20px] px-[100px] pt-[20px] bg-[#FAFAFC]'>
        <Col span={12} className='h-screen overflow-y-auto scrollbar-hide'>
          <JobCardItem />
          <JobCardItem />
          <JobCardItem />
          <JobCardItem />
          <JobCardItem />
          <JobCardItem />
          <JobCardItem />
        </Col>
        <Col span={12} className='pl-[20px]'>
          <JobDetails />
        </Col>
      </Row>
    </Row>
  );
};

export default Jobs;
