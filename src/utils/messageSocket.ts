import io from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000/api', {
  path: '/message',
});

export default socket;
