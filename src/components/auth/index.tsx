import LoadingPage from 'components/Loading';
import { useRouter } from 'next/router';
import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
export const AuthCheck: React.FC = ({ children }) => {
  const router = useRouter();
  const user = useAppSelector(selectUser); // you need to implement this. In this example, undefined means things are still loading, null means user is not signed in, anything truthy means they're signed in

  console.log('user AuthCheck', user);
  if (typeof window !== 'undefined' && user === null) router.push('/');

  if (!user) return <LoadingPage />; // a loading component that prevents the page from rendering

  return <>{children}</>;
};
