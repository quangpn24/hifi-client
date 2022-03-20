import type { AppProps } from 'next/app';
import 'styles/global.css';
import 'antd/dist/antd.css';
// import 'react-quill/dist/quill.snow.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import 'styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
