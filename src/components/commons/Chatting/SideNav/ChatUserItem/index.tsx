import { Avatar, Col, Divider, Row, Tooltip, Typography } from 'antd';
import { DEFAULT_IMAGE } from 'constant';
import moment from 'moment';
import React, { FC } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import socket from 'utils/messageSocket';
import styles from './index.module.less';

interface IProps {
  lastMessage: Message;
  roomId: string;
  chatter?: Chatter;
  selected: boolean;
}

const ChatUserItem: FC<IProps> = (props) => {
  const { chatter, roomId, lastMessage, selected } = props;
  const user = useAppSelector(selectUser);

  const handleJoinRoom = () => {
    socket.emit('fetchRoom', roomId);
  };

  return (
    <>
      <Row
        className={[styles.container, selected && styles.selected].join(' ')}
        onClick={handleJoinRoom}
      >
        <Col span={5} className='flex items-center bg-transparent'>
          <Avatar
            src={chatter?.avatar || 'https://joeschmoe.io/api/v1/random'}
            alt={chatter?.name}
            size={'large'}
          />
        </Col>
        <Col span={19}>
          <Typography.Title level={5} className='!mb-0'>
            {chatter?.name}
          </Typography.Title>
          <Row>
            <Typography.Text ellipsis={true} className='text-sm'>
              {user?._id === lastMessage?.userId ? 'You: ' : ''}
              {lastMessage?.content}
            </Typography.Text>
          </Row>
          <Row>
            <Tooltip title={moment(lastMessage?.createdAt).format('YYYY-MM-DD HH:mm:ss')}>
              <Typography.Text className='text-xs'>
                {moment(lastMessage?.createdAt).fromNow()}
              </Typography.Text>
            </Tooltip>
          </Row>
        </Col>
      </Row>
      <Divider style={{ margin: '12px 0' }}></Divider>
    </>
  );
};

export default ChatUserItem;
