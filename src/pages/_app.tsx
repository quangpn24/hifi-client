import 'antd/dist/antd.css';
import Layout from 'components/layout';
import 'config/day';
import Cookies from 'cookies';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
// import 'react-quill/dist/quill.snow.css';
import { Provider } from 'react-redux';
import { authActions } from 'redux/reducers/authSlice';
import { store } from 'redux/store';
import 'tailwindcss/tailwind.css';
require('../styles/App.less');
require('../styles/global.less');
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};
MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  try {
    const {
      ctx: { req, res },
    } = appContext;
    if (req && res) {
      const cookies = new Cookies(req, res);
      const accessToken = cookies.get('accessToken');
      accessToken && store.dispatch(authActions.update({ accessToken }));
    }
  } catch (error) {
    console.log('Error getInitialProps', error);
  }
  return { ...appProps };
};
// export default wrapper.withRedux(MyApp);
export default MyApp;
