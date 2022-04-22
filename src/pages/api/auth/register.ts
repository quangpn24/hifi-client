import authApi from 'api/authApi';
import Cookies from 'cookies';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  console.log('Req: ', req);
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const { accessToken, user } = await authApi.register(req.body);
    const cookies = new Cookies(req, res);
    cookies.set('accessToken', accessToken);

    return res.status(200).json({ message: 'Register successfully', data: user, accessToken });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default handler;
