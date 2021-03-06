import 'antd/dist/antd.css';
import { setAuthToken } from 'api/axiosClient';
import Layout from 'components/layouts';
import 'config/day';
import Cookies from 'cookies';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { authActions } from 'redux/reducers/authSlice';
import { store } from 'redux/store';
import 'tailwindcss/tailwind.css';
require('../styles/App.less');
require('../styles/global.less');
import Head from 'next/head';

const MyApp = ({ Component, pageProps, accessToken }: AppProps & { accessToken: string }) => {
  useEffect(() => {
    store.dispatch(authActions.update({ accessToken }));
  }, [accessToken]);

  return (
    <>
      <Head>
        <title>HIFI - Hire your future! Find your future!</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Hifi - Hire your future! Find your future!' />
        <meta
          property='og:description'
          content='Find your future. Let`t go to discover the world!. Your oppornities are in your hand'
        />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  let accessToken;
  try {
    const {
      ctx: { req, res },
    } = appContext;
    if (req && res) {
      const cookies = new Cookies(req, res);
      accessToken = cookies.get('accessToken');
      accessToken && setAuthToken(accessToken);
    }
  } catch (error) {
    console.log('Error MyApp.getInitialProps', error);
  }
  return { ...appProps, accessToken };
};

export default MyApp;
