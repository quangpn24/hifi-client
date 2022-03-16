import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import 'antd/dist/antd.css';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
require('../styles/App.less');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
