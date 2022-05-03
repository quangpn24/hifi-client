import { BellFilled, BellOutlined, WechatOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Col, Popover, Row, Tooltip } from 'antd';
import React, { FC } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import Content from './Content';
import Notifications from './Notifications';
import Title from './Title';

interface IProps {}

const RightContent: FC<IProps> = (props) => {
  const user = useAppSelector(selectUser);
  const avatarUrl = 'https://joeschmoe.io/api/v1/random';

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
      <Col>
        <Popover placement='bottomRight' content={<Notifications />} trigger='hover'>
          <Badge count={user?.notifications.length} size='small'>
            <Button icon={<BellFilled />} key='chatting' type='link' />
          </Badge>
        </Popover>
      </Col>
      <Col>
        <Popover placement='bottomRight' content={<Content />} title={<Title />} trigger='hover'>
          <Avatar
            style={{ cursor: 'pointer' }}
            shape='square'
            src={user?.photoUrl ? user.photoUrl : avatarUrl}
          />
        </Popover>
      </Col>
    </Row>
  );
};

export default RightContent;
