import { HomeOutlined } from '@ant-design/icons';
import authApi from 'api/authApi';
import axios from 'axios';
import Footer from 'components/layouts/Footer';
import Header from 'components/layouts/Header';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
import Utils from 'utils';
import LoadingPage from '../Loading';

const menu = [
  {
    id: 1,
    name: 'Jobs',
    url: '/job-posts',
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    name: 'Companies',
    url: '/companies',
    icon: <HomeOutlined />,
  },
];
const noAuthPaths = ['/auth/login', '/auth/register'];
const publicPaths = ['/', '/job-posts', '/companies'];
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
          if (error?.response?.status === 401) {
            dispatch(authActions.logout());
            axios.get('/api/auth/logout');
            if (
              !(noAuthPaths.includes(router.pathname) || Utils.matchPublicPaths(router.pathname))
            ) {
              Router.replace('/auth/login');
            }
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [accessToken, dispatch]);

  // useEffect(() => {
  //   if (
  //     !loading &&
  //     !accessToken &&
  //     !(noAuthPaths.includes(router.pathname) || publicPaths.includes(router.pathname))
  //   ) {
  //     Router.replace('/auth/login');
  //   }
  // }, [router.pathname, loading, accessToken]);

  if (loading) {
    return <LoadingPage />;
  }

  if (router.pathname.startsWith('/auth')) {
    return <>{children}</>;
  }

  return (
    <div className='flex flex-col h-screen'>
      <Header menu={menu} />
      <main className='flex-1 bg-[#EBEFF7] px-16 py-4'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
