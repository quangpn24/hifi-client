import { BellFilled, BellOutlined, WechatOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Col, Popover, Row, Tooltip } from 'antd';
import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
import { selectUser } from 'redux/selectors';
import notificationSocket from 'utils/notificationSocket';
import Content from './Content';
import Notifications from './Notifications';
import Title from './Title';

interface IProps {}

const RightContent: FC<IProps> = (props) => {
  const user = useAppSelector(selectUser);
  const avatarUrl = 'https://joeschmoe.io/api/v1/random';
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      notificationSocket.connect();
      notificationSocket.emit('joinNotification', {
        receiver: user?._id,
      });
    }
  }, [user]);

  useEffect(() => {
    notificationSocket.on('receiveNotification', (user) => {
      dispatch(authActions.setUser(user));
    });
  }, [notificationSocket]);

  return (
    <Row gutter={[10, 10]}>
      {!user ? (
        <Row gutter={[10, 10]}>
          <Col>
            <Button key='login' type='link' href='/auth/login'>
              <span className='font-semibold text-text-secondary'>Login</span>
            </Button>
          </Col>
          <Col>
            <Button key='signup' type='primary' href='/auth/signup'>
              <span className='font-semibold text-[#fff] '>Sign up</span>
            </Button>
          </Col>
        </Row>
      ) : (
        <Row gutter={[10, 10]}>
          <Col>
            <Tooltip title='Chat with recruiter'>
              <Button icon={<WechatOutlined />} key='chatting' type='link' href='/chatting' />
            </Tooltip>
          </Col>
          <Col>
            <Popover placement='bottomRight' content={<Notifications />} trigger='hover'>
              <Badge
                count={user?.notifications?.filter((noti) => !noti.isRead).length}
                size='small'
              >
                <Button icon={<BellFilled />} key='chatting' type='link' />
              </Badge>
            </Popover>
          </Col>
          <Col>
            <Popover
              placement='bottomRight'
              content={<Content />}
              title={<Title />}
              trigger='hover'
            >
              <Avatar
                style={{ cursor: 'pointer' }}
                shape='square'
                src={user?.photoUrl ? user.photoUrl : avatarUrl}
              />
            </Popover>
          </Col>
        </Row>
      )}
    </Row>
  );
};

export default RightContent;
