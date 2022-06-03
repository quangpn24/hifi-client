import { Button, Card } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import socket from 'utils/messageSocket';

type Props = {};

const Support = (props: Props) => {
  const user = useAppSelector(selectUser);
  const router = useRouter();
  const handleSupport = () => {
    socket.connect();
    socket.emit('joinRoomByChatterId', {
      admin: '627784b7a8dfd63eec4a8ca1',
      user: user?._id,
    });

    router.push('/chatting');
  };
  return (
    <div className='px-16'>
      <Card title={'Help & Support'.toUpperCase()}>
        <p>For assistance regarding your Glints account, contact us via the button below.</p>
        <Button className='mt-4' type='primary' onClick={handleSupport}>
          Get Help
        </Button>
      </Card>
    </div>
  );
};

export default Support;
