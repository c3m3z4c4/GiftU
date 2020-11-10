
// // option C: este caso esta basado en el video.
// // PERO LO ROMPI  por descomentar y eso, ya se murio.
// // referencia:
// // https://www.youtube.com/watch?v=y34ym0-KZ8A&t=1497s

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
// //  aqui ir a app y descomentar conf
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


// // option A
// //  referencia https://grischuk.de/how-to-setup-apollo-client-in-order-to-perform-graph-ql-queries-with-next-js
// // import React from 'react';
// // import Head from 'next/head';
// // import { ApolloProvider } from '@apollo/react-hooks';
// // import { ApolloClient } from 'apollo-client';
// // import { InMemoryCache } from 'apollo-cache-inmemory';

// // let globalApolloClient = null;

// // export function withApollo(PageComponent, { ssr = true } = {}) {
// //   const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
// //     const client = apolloClient || initApolloClient(apolloState)
// //     return (
// //       <ApolloProvider client={client}>
// //         <PageComponent {...pageProps} />
// //       </ApolloProvider>
// //     )
// //   }


// // //   aqui no se en nuestro caso que debe ir en lugar de process.env.NODE_ENV
// //   if (process.env.NODE_ENV !== 'production') {
// //     const displayName =
// //       PageComponent.displayName || PageComponent.name || 'Component'

// //     if (displayName === 'App') {
// //       console.warn('This withApollo HOC only works with PageComponents.')
// //     }
// //     WithApollo.displayName = `withApollo(${displayName})`
// //   }

// //   if (ssr || PageComponent.getInitialProps) {
// //     WithApollo.getInitialProps = async (ctx) => {
// //       const { AppTree } = ctx


// //       const apolloClient = (ctx.apolloClient = initApolloClient())


// //       let pageProps = {}
// //       if (PageComponent.getInitialProps) {
// //         pageProps = await PageComponent.getInitialProps(ctx)
// //       }


// //       if (typeof window === 'undefined') {
// //         if (ctx.res && ctx.res.finished) {
// //           return pageProps
// //         }   
// //       if (ssr) {
// //         try {
// //           const { getDataFromTree } = await import('@apollo/react-ssr')
// //           await getDataFromTree(
// //             <AppTree
// //               pageProps={{
// //                 ...pageProps,
// //                 apolloClient,
// //               }}
// //             />
// //           )
// //         } catch (error) {
// //           console.error('Error while running `getDataFromTree`', error)
// //         }
// //         Head.rewind()
// //       }
// //     }

// //     const apolloState = apolloClient.cache.extract()

// //     return {
// //       ...pageProps,
// //       apolloState,
// //     }
// //   }
// // }

// // return WithApollo
// // }

// // function initApolloClient(initialState) {
// //   if (typeof window === 'undefined') {
// //     return createApolloClient(initialState)
// //   }

// //   if (!globalApolloClient) {
// //     globalApolloClient = createApolloClient(initialState)
// //   }

// //   return globalApolloClient
// // }

// // function createApolloClient(initialState = {}) {
// //   const ssrMode = typeof window === 'undefined'
// //   const cache = new InMemoryCache().restore(initialState)

// //   return new ApolloClient({
// //     ssrMode,
// //     link: createIsomorphLink(),
// //     cache,
// //   })
// // }

// // function createIsomorphLink() {
// //   if (typeof window === 'undefined') {
// //     const { SchemaLink } = require('apollo-link-schema')
// //     const { schema } = require('./schema')
// //     return new SchemaLink({ schema })
// //   } else {
// //     const { HttpLink } = require('apollo-link-http')
// //     return new HttpLink({
// //         //   aqui va nuestra url del api
// //       uri: 'https://us1.prisma.sh/john-a-agudelo-e911b8/johnaagudelodb/dev',
// //       credentials: 'same-origin',
// //     })
// //   }
// // }




        



// // option b
// //  esta otra no me aucerdo de donde la sacar, fue un hibrido entre una documentacion y mia.

// // import { ApolloClient } from 'apollo-client';
// // import { InMemoryCache } from 'apollo-cache-inmemory';
// // import withApollo from 'next-with-apollo';
// // import { createHttpLink } from 'apollo-link-http';
// // import fetch from 'isomorphic-unfetch';

// // // Update the GraphQL endpoint to any instance of GraphQL that you like
// // const GRAPHQL_URL = 'https://us1.prisma.sh/john-a-agudelo-e911b8/johnaagudelodb/dev';

// // const link = createHttpLink({
// //   fetch, // Switches between unfetch & node-fetch for client & server.
// //   uri: GRAPHQL_URL
// // });

// //  const client = withApollo(
// //   // You can get headers and ctx (context) from the callback params
// //   // e.g. ({ headers, ctx, initialState })
// //   ({ initialState }) =>
// //     new ApolloClient({
// //       link: link,
// //       cache: new InMemoryCache()
// //         //  rehydrate the cache using the initial data passed from the server:
// //         .restore(initialState || {})
// //     })
// // );

// // export default client;






