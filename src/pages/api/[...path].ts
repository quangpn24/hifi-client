import httpProxy from 'http-proxy';
import Cookies from 'cookies';
import url from 'url';
import { NextApiRequest, NextApiResponse } from 'next';
import { proxy } from 'server/proxy';
const API_URL = process.env.API_URL;
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise((resolve, reject) => {
    const pathname = url.parse(req?.url || '').pathname;
    const isLogin = pathname === '/api/login';
    // Get the `auth-token` cookie:
    const cookies = new Cookies(req, res);

    const authToken = cookies.get('accessToken');
    resolve(undefined);
  });
};

export default handler;
