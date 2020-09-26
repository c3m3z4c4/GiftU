import { AppProps } from 'next/app';
import '../global.css';

function MyApp({ Component, pageProps }) {

    return (
      <Component {...pageProps} />
    );
  }
  export default MyApp;