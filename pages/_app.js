import { AppProps } from 'next/app';
import { Fragment } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {

    return (
      <Fragment>
        <GlobalStyle />
        <Component {...pageProps} />
      </Fragment>
    )
  }
  export default MyApp;