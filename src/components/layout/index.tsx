import authApi from 'api/authApi';
import awardApi from 'api/awardApi';
import axiosClient, { setAuthToken } from 'api/axiosClient';
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
import LoadingPage from './Loading';

const Layout: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('/api/auth/verify')
      .then(({ data }) => {
        console.log('User', data);
        dispatch(authActions.update(data));
      })
      .catch((error) => {
        dispatch(authActions.update({ accessToken: undefined, user: undefined }));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      {children}
    </>
  );
};

export default Layout;
