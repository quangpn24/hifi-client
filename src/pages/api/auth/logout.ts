import authApi from 'api/authApi';
import Cookies from 'cookies';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  const cookies = new Cookies(req, res);
  cookies.set('accessToken', undefined);
  console.log('api/auth/logout');
  return res.status(200).json({ message: 'Log out successfully' });
};

export default handler;
