import React, { FC, useEffect } from 'react';
import NotificationItem from './NotificationItem';
import { Typography } from 'antd';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import moment from 'moment';

interface IProp {}

const Notifications: FC<IProp> = (props) => {
  const user = useAppSelector(selectUser);

  return (
    <div style={{ width: 300, overflowY: 'auto', overflowX: 'hidden', maxHeight: 500 }}>
      <Typography.Title style={{ fontSize: '20px' }}>Notifications</Typography.Title>
      <div>
        {user?.notifications
          .slice(0)
          .reverse()
          .map((notification: Noti) => {
            return <NotificationItem key={notification?._id} notification={notification} />;
          })}
      </div>
    </div>
  );
};

export default Notifications;
