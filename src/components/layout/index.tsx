import authApi from 'api/authApi';
import axiosClient from 'api/axiosClient';
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
import LoadingPage from './Loading';
import { Button, Layout as AntdLayout, Menu } from 'antd';
import { useRouter } from 'next/router';
const { Header } = AntdLayout;
const Layout: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  useEffect(() => {
    setLoading(true);
    if (accessToken) {
      authApi
        .verify(accessToken)
        .then((data) => {
          dispatch(authActions.update(data));
        })
        .catch((error) => {
          dispatch(authActions.logout());
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [accessToken, dispatch]);

  if (loading) {
    return <LoadingPage />;
  }

  const handleLogout = async () => {
    try {
      const { data } = await axios.get('/api/auth/logout');
      dispatch(authActions.logout());
      router.replace('/auth/login');
    } catch (error) {
      console.log('Error logout', error);
    }
  };
  return (
    <AntdLayout className='layout '>
      {/* Test protected route */}
      <Header className='!bg-slate-50'>
        <Button onClick={handleLogout}>Log out</Button>
        <Button className='ml-4' onClick={() => router.push('/')}>
          Home
        </Button>
        <Button className='ml-4' onClick={() => router.push('/profile')}>
          Profile
        </Button>

        <Button className='ml-4' onClick={() => router.push('/auth/login')}>
          Login
        </Button>
      </Header>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      {children}
    </AntdLayout>
  );
};

export default Layout;
