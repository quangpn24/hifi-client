import { Menu, Space } from 'antd';
import Image from 'next/image';
import React from 'react';
import { CalculatorIcon } from '@heroicons/react/solid';
import StatusSideBar from 'components/job_seeker/application/StatusSideBar';
import ApplicationList from 'components/job_seeker/application/ApplicationList';
type Props = {};

const ApplicationsPage = (props: Props) => {
  return (
    <div className='p-8'>
      <h1>My Applications</h1>
      <div className='flex'>
        <StatusSideBar />
        <ApplicationList />
      </div>
    </div>
  );
};

export default ApplicationsPage;
