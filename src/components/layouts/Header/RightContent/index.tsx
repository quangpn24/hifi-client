import { WechatOutlined } from '@ant-design/icons';
import { Button, Col, Row, Tooltip } from 'antd';
import React, { FC } from 'react';

interface IProps {}

const RightContent: FC<IProps> = (props) => {
  return (
    <Row gutter={[10, 10]}>
      <Col>
        <Button key='login' type='link' href='/login'>
          <span className='font-semibold text-text-secondary'>Login</span>
        </Button>
      </Col>
      <Col>
        <Button key='signup' type='primary' href='/signup'>
          <span className='font-semibold text-[#fff] '>Sign up</span>
        </Button>
      </Col>
      <Col>
        <Tooltip title='Chat with recruiter'>
          <Button icon={<WechatOutlined />} key='chatting' type='link' href='/chatting' />
        </Tooltip>
      </Col>
    </Row>
  );
};

export default RightContent;
