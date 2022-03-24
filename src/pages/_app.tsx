import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
// import 'react-quill/dist/quill.snow.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import 'tailwindcss/tailwind.css';
require('../styles/App.less');
require('../styles/global.less');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
