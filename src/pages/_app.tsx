import 'antd/dist/antd.css';
import { setAuthToken } from 'api/axiosClient';
import Layout from 'components/layout';
import 'config/day';
import Cookies from 'cookies';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import { useEffect } from 'react';
// import 'react-quill/dist/quill.snow.css';
import { Provider } from 'react-redux';
import { authActions } from 'redux/reducers/authSlice';
import { store } from 'redux/store';
import 'tailwindcss/tailwind.css';
require('../styles/App.less');
require('../styles/global.less');
const MyApp = ({ Component, pageProps, accessToken }: AppProps & { accessToken: string }) => {
  useEffect(() => {
    store.dispatch(authActions.update({ accessToken }));
  }, [accessToken]);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
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
// export default wrapper.withRedux(MyApp);
export default MyApp;
