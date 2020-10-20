import { ApolloProvider } from '@apollo/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useApollo } from '../Apollo/apollo.client';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `;

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
	const client = useApollo(pageProps.initialApolloState);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
      </ThemeProvider>
    </>
  )
}