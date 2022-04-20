import { Col, Row } from 'antd';
import React from 'react';

type Props = {};

const ViewStatistic = (props: Props) => {
  return (
    <div className='p-4 mt-3 bg-stone-200-300 rounded-md shadow'>
      <h3>Statistics of views from Employers</h3>
      <p className='text-error-color italic'>This section is only visible to you</p>
      <Row gutter={[8, 16]}>
        <Col span={8} className='bg-white px-2 shadow-md rounded-md'>
          <div>
            <h2>0</h2>
            <p>Views of the week</p>
          </div>
        </Col>
        <Col span={8} className='bg-white px-2 shadow rounded-md'>
          <div>
            <h2>0</h2>
            <p>Views of the week</p>
          </div>
        </Col>
        <Col span={8} className='bg-white px-2 shadow rounded-md'>
          <div>
            <h2>0</h2>
            <p>Views of the week</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ViewStatistic;
