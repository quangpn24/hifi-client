import { SearchOutlined } from '@ant-design/icons';
import { Input, Typography } from 'antd';
import roomApi from 'api/roomApi';
import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setCurrentRoomState, setRoomsState } from 'redux/reducers/chattingSlice';
import { chattingState, selectUser } from 'redux/selectors';
import socket from 'utils/messageSocket';
import ChatUserItem from './ChatUserItem';
const { Title } = Typography;

interface IProps {}

const SideNav: FC<IProps> = (props) => {
  const user = useAppSelector(selectUser);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [receivedData, setReceivedData] = useState<Room>();
  const [roomId, setRoomId] = useState<string>();
  const [searchName, setSearchName] = useState<string>('');
  const dispatch = useAppDispatch();
  const chatting = useAppSelector(chattingState);

  const joinAllRoom = () => {
    socket.connect();

    rooms.forEach((room) => {
      socket.emit('joinRoom', room._id);
    });
  };

  const handleSearch = (value: string) => {
    setSearchName(value);
  };

  useEffect(() => {
    socket.on('sendRoom', (data: Room) => {
      setRoomId(data._id);
      dispatch(setCurrentRoomState(data));
    });
  }, [socket]);

  useEffect(() => {
    roomApi
      .getRoomsByUserId(user?._id!)
      .then((res) => {
        dispatch(
          setRoomsState([
            ...res.data.value,
            ...res.data.value,
            ...res.data.value,
            ...res.data.value,
          ])
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (chatting.rooms) {
      setRooms(chatting.rooms);
    }
  }, [chatting]);

  useEffect(() => {
    if (rooms.length > 0) {
      joinAllRoom();
    }
  }, [rooms]);

  useEffect(() => {
    socket.on('sendDataServer', (data: Room) => {
      setReceivedData(data);
    });
  }, [socket]);

  useEffect(() => {
    if (receivedData) {
      let newRooms = [...chatting.rooms!];
      const index = newRooms.findIndex((room) => room._id === receivedData?._id);

      if (index != -1) {
        newRooms.splice(index, 1);
      }
      newRooms.unshift(receivedData);

      dispatch(setRoomsState(newRooms));

      if (receivedData?._id === chatting.currentRoom?._id) {
        dispatch(setCurrentRoomState(receivedData));
      }
    }
  }, [receivedData]);

  return (
    <>
      <Title level={3}>Chats</Title>
      <Input
        prefix={<SearchOutlined />}
        onChange={(event: any) => handleSearch(event.target.value)}
        placeholder='Search or start new chat'
        className='mb-2 !rounded-2xl'
      ></Input>
      <div className='h-[312px] overflow-y-auto'>
        {rooms
          .filter((room) =>
            room.chatters
              .find((chatter) => chatter.chatterId != user?._id)
              ?.name.toLowerCase()
              .includes(searchName.toLowerCase())
          )
          .map((room) => {
            return (
              <ChatUserItem
                lastMessage={room.messages[room.messages.length - 1]}
                key={room._id}
                roomId={room._id}
                chatter={room.chatters.find((chatter) => chatter.chatterId != user?._id)}
                selected={room._id === roomId}
              />
            );
          })}
      </div>
    </>
  );
};

export default SideNav;
