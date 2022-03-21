import { Col, Input, Row } from 'antd';
import AppHeading from 'components/commons/AppHeading';
import CheckboxMenu from 'components/commons/CheckboxMenu';
import JobCardItem from 'components/JobSeeker/JobList/JobCardItem';
import JobDetails from 'components/JobSeeker/JobList/JobDetails';
import React from 'react';

const { Search } = Input;
type Props = {};
type Option = {
  label: string;
  value: string | number;
};
const Jobs = (props: Props) => {
  const options: Array<Option> = [
    {
      label: 'abc',
      value: 1,
    },
    {
      label: 'abc',
      value: 2,
    },
    {
      label: 'abc',
      value: 3,
    },
    {
      label: 'abc',
      value: 4,
    },
    {
      label: 'abc',
      value: 5,
    },
    {
      label: 'abc',
      value: 5,
    },
    {
      label: 'abc',
      value: 5,
    },
    {
      label: 'abc',
      value: 5,
    },
    {
      label: 'abc',
      value: 5,
    },
    {
      label: 'abc',
      value: 5,
    },
    {
      label: 'abc',
      value: 5,
    },
  ];
  return (
    <Row>
      <Row gutter={20} className='w-full px-[100px]'>
        <Col span={24} className='my-[20px]'>
          <AppHeading text={'Search jobs, companies, ....'} />
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
        <Col>
          <div className='flex w-auto'>
            <Input.Group compact className='!mr-[20px]'>
              <CheckboxMenu
                options={options}
                onChange={() => {}}
                keyword='Tất cả ngành nghề'
                defaultValue={[1, 2, 3]}
              />
            </Input.Group>
            <Input.Group compact className='!mr-[20px]'>
              <CheckboxMenu options={options} onChange={() => {}} keyword='Tất cả cấp bậc' />
            </Input.Group>
            <Input.Group compact>
              <CheckboxMenu options={options} onChange={() => {}} keyword='Tất cả mức lương' />
            </Input.Group>
          </div>
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
