import React, { FC, useEffect, useState } from 'react';
import ChatItem from './ChatItem';
import styles from './index.module.less';
import socket from 'utils/messageSocket';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setRoom } from 'redux/actions/chattingActions';
import { selectUser } from 'redux/selectors';

interface IProps {
  chatterAvatar?: string;
}

const ChatBoxContent: FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const chatting = useAppSelector((state) => state.chatting);
  const [messageList, setMessageList] = useState<Message[]>([]);
  const user = useAppSelector(selectUser);
  const { chatterAvatar } = props;

  useEffect(() => {
    socket.on('sendDataServer', (data: Room) => {
      dispatch(setRoom(data));
    });
  }, [socket]);

  useEffect(() => {
    if (chatting.currentRoom) {
      setMessageList(chatting.currentRoom?.messages);
    }
  }, [chatting]);

  return (
    <div className={styles.container}>
      <div>
        {messageList.map((message, index) => {
          return (
            <ChatItem
              key={index}
              isMine={message.userId === user?._id}
              message={message.content}
              date={message.createdAt}
              avatar={message.userId === user?._id ? user.photoUrl : chatterAvatar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatBoxContent;
