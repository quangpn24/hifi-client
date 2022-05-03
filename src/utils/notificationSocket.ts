import io from 'socket.io-client';

const notificationSocket = io(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000/api', {
  path: '/notification',
});

export default notificationSocket;
