
// option A
// import React from 'react';
// import Head from 'next/head';
// import { ApolloProvider } from '@apollo/react-hooks';
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';

// let globalApolloClient = null;

// export function withApollo(PageComponent, { ssr = true } = {}) {
//   const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
//     const client = apolloClient || initApolloClient(apolloState)
//     return (
//       <ApolloProvider client={client}>
//         <PageComponent {...pageProps} />
//       </ApolloProvider>
//     )
//   }

//   if (process.env.NODE_ENV !== 'production') {
//     const displayName =
//       PageComponent.displayName || PageComponent.name || 'Component'

//     if (displayName === 'App') {
//       console.warn('This withApollo HOC only works with PageComponents.')
//     }
//     WithApollo.displayName = `withApollo(${displayName})`
//   }

//   if (ssr || PageComponent.getInitialProps) {
//     WithApollo.getInitialProps = async (ctx) => {
//       const { AppTree } = ctx

//       // Initialize ApolloClient, add it to the ctx object so
//       // we can use it in `PageComponent.getInitialProp`.
//       const apolloClient = (ctx.apolloClient = initApolloClient())

//       // Run wrapped getInitialProps methods
//       let pageProps = {}
//       if (PageComponent.getInitialProps) {
//         pageProps = await PageComponent.getInitialProps(ctx)
//       }

//       // Only on the server:
//       if (typeof window === 'undefined') {
//         // When redirecting, the response is finished.
//         // No point in continuing to render
//         if (ctx.res && ctx.res.finished) {
//           return pageProps
//         }   
//       // Only if ssr is enabled
//       if (ssr) {
//         try {
//           // Run all GraphQL queries
//           const { getDataFromTree } = await import('@apollo/react-ssr')
//           await getDataFromTree(
//             <AppTree
//               pageProps={{
//                 ...pageProps,
//                 apolloClient,
//               }}
//             />
//           )
//         } catch (error) {
//           // Prevent Apollo Client GraphQL errors from crashing SSR.
//           // Handle them in components via the data.error prop:
//           // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
//           console.error('Error while running `getDataFromTree`', error)
//         }

//         // getDataFromTree does not call componentWillUnmount
//         // head side effect therefore need to be cleared manually
//         Head.rewind()
//       }
//     }

//     // Extract query data from the Apollo store
//     const apolloState = apolloClient.cache.extract()

//     return {
//       ...pageProps,
//       apolloState,
//     }
//   }
// }

// return WithApollo
// }

// function initApolloClient(initialState) {
//   // Make sure to create a new client for every server-side request so that data
//   // isn't shared between connections (which would be bad)
//   if (typeof window === 'undefined') {
//     return createApolloClient(initialState)
//   }

//   // Reuse client on the client-side
//   if (!globalApolloClient) {
//     globalApolloClient = createApolloClient(initialState)
//   }

//   return globalApolloClient
// }

// function createApolloClient(initialState = {}) {
//   const ssrMode = typeof window === 'undefined'
//   const cache = new InMemoryCache().restore(initialState)

//   // Check out https://github.com/vercel/next.js/pull/4611 if you want to use the AWSAppSyncClient
//   return new ApolloClient({
//     ssrMode,
//     link: createIsomorphLink(),
//     cache,
//   })
// }

// function createIsomorphLink() {
//   if (typeof window === 'undefined') {
//     const { SchemaLink } = require('apollo-link-schema')
//     const { schema } = require('./schema')
//     return new SchemaLink({ schema })
//   } else {
//     const { HttpLink } = require('apollo-link-http')
//     return new HttpLink({
//       uri: '/api/graphql',
//       credentials: 'same-origin',
//     })
//   }
// }




        

// option b

// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import withApollo from 'next-with-apollo';
// import { createHttpLink } from 'apollo-link-http';
// import fetch from 'isomorphic-unfetch';

// // Update the GraphQL endpoint to any instance of GraphQL that you like
// const GRAPHQL_URL = 'https://us1.prisma.sh/john-a-agudelo-e911b8/johnaagudelodb/dev';

// const link = createHttpLink({
//   fetch, // Switches between unfetch & node-fetch for client & server.
//   uri: GRAPHQL_URL
// });

//  const client = withApollo(
//   // You can get headers and ctx (context) from the callback params
//   // e.g. ({ headers, ctx, initialState })
//   ({ initialState }) =>
//     new ApolloClient({
//       link: link,
//       cache: new InMemoryCache()
//         //  rehydrate the cache using the initial data passed from the server:
//         .restore(initialState || {})
//     })
// );

// export default client;



// option C

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