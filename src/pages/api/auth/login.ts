import authApi from 'api/authApi';
import Cookies from 'cookies';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  console.log('await authApi.login(req.body);');
  return res.status(404).json({ message: 'Method not allowed' });
  if (req.method !== 'POST') {
  }
  try {
    console.log('await authApi.login(req.body);');
    const { accessToken, user } = await authApi.login(req.body);
    const cookies = new Cookies(req, res);
    cookies.set('accessToken', accessToken);

    return res.status(200).json({ message: 'Log in successfully', data: user, accessToken });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default handler;
