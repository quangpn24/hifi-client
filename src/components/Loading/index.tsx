import { Spin } from 'antd';
import React from 'react';

type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Spin size='large' />
    </div>
  );
};

export default LoadingPage;
