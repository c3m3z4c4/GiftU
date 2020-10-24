import { ApolloProvider } from '@apollo/client';
// import withData from '../util/apollo-client';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import client from '../Apollo/apollo.client';

// import { useApollo } from '../Apollo/apollo.client';
// import { 
//   ApolloClient,
//   HttpLink,
//   InMemoryCache,
// } from '@apollo/client';

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
  
  // const client = useApollo(pageProps.initialApolloState);

  // const client = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   uri: 'https://us1.prisma.sh/john-a-agudelo-e911b8/johnaagudelodb/dev',
  // });

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