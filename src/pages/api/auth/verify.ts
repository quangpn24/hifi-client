import authApi from 'api/authApi';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  const accessToken = req.cookies['accessToken'];
  if (!accessToken) {
    return res.status(401).json({ message: 'Not authenticated.' });
  }
  try {
    const { user } = await authApi.verify(accessToken);
    return res.status(200).json({ user, accessToken });
  } catch (error) {
    res.status(401).json({ message: 'Not authenticated.' });
  }
};

export default handler;
