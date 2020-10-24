import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = 'https://us1.prisma.sh/john-a-agudelo-e911b8/johnaagudelodb/dev';

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL
});

 const client = withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {})
    })
);

export default client;


// import { 
//     ApolloClient,
//     HttpLink,
//     InMemoryCache,
// } from '@apollo/client';
// import { useMemo } from 'react';

// let apolloClient;

// function createIsomorphicLink(){ 

// function cretApolloClient(){
//     return new ApolloClient({
//         ssrMode: window === 'undefined',
//         link:createIsomorphicLink(),
//         cache: new InMemoryCache()
//     });
// };

// export function initializeApollo(initialState = null) {
//     const _apolloClient = apolloClient ?? cretApolloClient();
//     if (initialState) {
//         _apolloClient.cache.restore(initialState)   
//     }
//     if(window === 'undefined') return _apolloClient;
//         apolloClient = apolloClient ?? _apolloClient;
//         return apolloClient;
// };

// export function useApollo(initialState){
//   const store = useMemo(() => initializeApollo(initialState), [initialState]);
//   return store;
// };