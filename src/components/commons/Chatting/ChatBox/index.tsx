import { MessageOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import ChatBoxContent from './ChatBoxContent';
import ChatBoxHeader from './ChatBoxHeader';
import ChatBoxInput from './ChatBoxInput';

interface IProps {
  setVisibleDrawer: Function;
}

const ChatBox: FC<IProps> = (props) => {
  const { setVisibleDrawer } = props;
  const chatting = useAppSelector((state) => state.chatting);
  const [room, setRoom] = useState<Room>();

  useEffect(() => {
    if (chatting) {
      setRoom(chatting.currentRoom);
    }
  }, [chatting]);

  return (
    <div className='flex flex-col p-2 h-full'>
      {room ? (
        <>
          <ChatBoxHeader setVisibleDrawer={setVisibleDrawer} chatter={room.chatters[0]} />
          <ChatBoxContent />
          <ChatBoxInput roomId={room._id} />
        </>
      ) : (
        <div className='flex flex-col h-[calc(100vh-268px)] items-center justify-center'>
          <Typography.Title>🙂 Select user to chat</Typography.Title>
          <Row>
            <Col md={0} sm={24} xs={24}>
              <Button
                size='large'
                shape='circle'
                type='primary'
                icon={<MessageOutlined />}
                onClick={() => {
                  setVisibleDrawer();
                }}
              ></Button>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
