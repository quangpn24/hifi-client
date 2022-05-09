import {
  ClockIcon,
  CurrencyDollarIcon,
  ExternalLinkIcon,
  LocationMarkerIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline';
import { Col, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
type Props = {
  jobPost: Post;
};

const JobDetails = ({ jobPost }: Props) => {
  return (
    <div className='bg-white shadow rounded p-4'>
      <h3>Job Details</h3>
      <Row gutter={16}>
        <Col>
          <div className='flex items-center gap-2 mb-2'>
            <OfficeBuildingIcon className='w-5 h-5' />
            <span className='inline-block'>{jobPost.jobType}</span>
          </div>
          <div className='flex items-center gap-2'>
            <CurrencyDollarIcon className='w-5 h-5' />
            <span className='inline-block'>
              {jobPost.salary?.unit.toUpperCase()} {jobPost.salary?.min} - {jobPost.salary?.max} /
              month
            </span>
          </div>
        </Col>
        <Col>
          <div className='flex items-center gap-2 mb-2'>
            <LocationMarkerIcon className='w-5 h-5' />
            <span className='inline-block'>Data Science</span>
          </div>
          <div className='flex items-center gap-2'>
            <ClockIcon className='w-5 h-5' />
            <span className='inline-block'>{jobPost.jobType}</span>
          </div>
        </Col>
      </Row>
      <Link href={'/job-posts/' + jobPost._id}>
        <a>
          <div className='flex items-center mt-4 gap-2'>
            <ExternalLinkIcon className='w-5 h-5' />
            <span className='inline-block'>View complete job details</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default JobDetails;
