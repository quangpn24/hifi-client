import { HomeOutlined } from '@ant-design/icons';
import { Layout as AntdLayout } from 'antd';
import authApi from 'api/authApi';
import axios from 'axios';
import Footer from 'components/layouts/Footer';
import Header from 'components/layouts/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
import LoadingPage from './Loading';

const menu = [
  {
    id: 1,
    name: 'Jobs',
    url: './jobs',
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    name: 'Companies',
    url: './companies',
    icon: <HomeOutlined />,
  },
];
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
    <>
      {/* Test protected route */}
      {/* <Head>
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <Header className='!bg-slate-50 space-x-8'>
        {accessToken && <Button onClick={handleLogout}>Log out</Button>}
        <Link href={'/'}>Home</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/auth/login'}>Login</Link>
      </Header> */}
      <div className='flex flex-col h-screen'>
        <Header menu={menu}></Header>
        <main className='flex-1 bg-[#EBEFF7]'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
