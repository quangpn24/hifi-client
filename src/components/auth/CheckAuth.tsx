import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';

type Props = {};
const noAuthPaths = ['/auth/login', '/auth/register'];
const publicPaths = ['/'];
const CheckAuth: React.FC = ({ children }) => {
  const user = useAppSelector(selectUser);
  const router = useRouter();
  useEffect(() => {
    if (
      !user &&
      !(noAuthPaths.includes(router.pathname) || publicPaths.includes(router.pathname))
    ) {
      Router.replace('/auth/login');
    }
  }, [router.pathname, user]);
  return <>{children}</>;
};

export default CheckAuth;
