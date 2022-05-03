import React, { FC, useEffect } from 'react';
import NotificationItem from './NotificationItem';
import { Typography } from 'antd';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import moment from 'moment';

interface IProp {}

const Notifications: FC<IProp> = (props) => {
  const user = useAppSelector(selectUser);
  const notification = {
    _id: '123',
    message: 'ABC',
    createdAt: new Date(),
    redirectUrl: 'ABC',
  };

  return (
    <div style={{ width: 300 }}>
      <Typography.Title style={{ fontSize: '20px' }}>Notifications</Typography.Title>
      {user?.notifications
        .slice(0)
        .reverse()
        .map((notification) => {
          return <NotificationItem key={notification?._id} notification={notification} />;
        })}
      <NotificationItem key={notification?._id} notification={notification}></NotificationItem>
    </div>
  );
};

export default Notifications;
