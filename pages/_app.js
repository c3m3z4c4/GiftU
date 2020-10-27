import { ApolloProvider } from '@apollo/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

// import client from '../Apollo/apollo.client';

//  desconentar esto para caso c 
// import withData from '../util/apollo-client';
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
  
  // este ccon el caso c
  // const client = useApollo(pageProps.initialApolloState);


  // este que se quede comentado, es la configuracion sin considerar nada de next, esto es l oque aroja la data unefinded:

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