import io from 'socket.io-client';

console.log(process.env.NEXT_PUBLIC_SERVER_URL);

const socket = io(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000/api');

export default socket;
