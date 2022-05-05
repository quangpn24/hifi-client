import { HomeOutlined } from '@ant-design/icons';
import authApi from 'api/authApi';
import axios from 'axios';
import Footer from 'components/layouts/Footer';
import Header from 'components/layouts/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
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
          if (error.response.status === 401) {
            axios.get('/api/auth/logout');
            dispatch(authActions.logout());
          }
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
  if (router.pathname.startsWith('/auth')) {
    return <>{children}</>;
  }

  return (
    <div className='flex flex-col h-screen'>
      <Header menu={menu} />
      <main className='flex-1 bg-[#EBEFF7] px-16'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
