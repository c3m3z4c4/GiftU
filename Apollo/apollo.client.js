// /*eslint-disable */
// import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({
//   uri,
//   credentials: 'same-origin',
// });

// const authLink = setContext((_, { headers = {} }) => {
//   return {
//     headers: {
//       headers,
//       Authorization: token ? `Bearer ${accessToken}:${token}` : `Bearer ${accessToken}`,
//     },
//   };
// });

// const link = ApolloLink.from([authLink,errorLink,httpLink]);
// const cache = new InMemoryCache({
//   addTypename: false,
// });


// const client = new ApolloClient({
//   link,
// });

// export default client;
