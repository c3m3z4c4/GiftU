module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Apollo/apollo.client.js":
/*!*********************************!*\
  !*** ./Apollo/apollo.client.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// option C\n// import React from 'react';\n// import Head from 'next/head';\n// import { ApolloProvider } from '@apollo/react-hooks';\n// import { ApolloClient } from 'apollo-client';\n// import { InMemoryCache } from 'apollo-cache-inmemory';\n// let globalApolloClient = null;\n// export function withApollo(PageComponent, { ssr = true } = {}) {\n//   const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {\n//     const client = apolloClient || initApolloClient(apolloState)\n//     return (\n//       <ApolloProvider client={client}>\n//         <PageComponent {...pageProps} />\n//       </ApolloProvider>\n//     )\n//   }\n//   if (process.env.NODE_ENV !== 'production') {\n//     const displayName =\n//       PageComponent.displayName || PageComponent.name || 'Component'\n//     if (displayName === 'App') {\n//       console.warn('This withApollo HOC only works with PageComponents.')\n//     }\n//     WithApollo.displayName = `withApollo(${displayName})`\n//   }\n//   if (ssr || PageComponent.getInitialProps) {\n//     WithApollo.getInitialProps = async (ctx) => {\n//       const { AppTree } = ctx\n//       // Initialize ApolloClient, add it to the ctx object so\n//       // we can use it in `PageComponent.getInitialProp`.\n//       const apolloClient = (ctx.apolloClient = initApolloClient())\n//       // Run wrapped getInitialProps methods\n//       let pageProps = {}\n//       if (PageComponent.getInitialProps) {\n//         pageProps = await PageComponent.getInitialProps(ctx)\n//       }\n//       // Only on the server:\n//       if (typeof window === 'undefined') {\n//         // When redirecting, the response is finished.\n//         // No point in continuing to render\n//         if (ctx.res && ctx.res.finished) {\n//           return pageProps\n//         }   \n//       // Only if ssr is enabled\n//       if (ssr) {\n//         try {\n//           // Run all GraphQL queries\n//           const { getDataFromTree } = await import('@apollo/react-ssr')\n//           await getDataFromTree(\n//             <AppTree\n//               pageProps={{\n//                 ...pageProps,\n//                 apolloClient,\n//               }}\n//             />\n//           )\n//         } catch (error) {\n//           // Prevent Apollo Client GraphQL errors from crashing SSR.\n//           // Handle them in components via the data.error prop:\n//           // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error\n//           console.error('Error while running `getDataFromTree`', error)\n//         }\n//         // getDataFromTree does not call componentWillUnmount\n//         // head side effect therefore need to be cleared manually\n//         Head.rewind()\n//       }\n//     }\n//     // Extract query data from the Apollo store\n//     const apolloState = apolloClient.cache.extract()\n//     return {\n//       ...pageProps,\n//       apolloState,\n//     }\n//   }\n// }\n// return WithApollo\n// }\n// function initApolloClient(initialState) {\n//   // Make sure to create a new client for every server-side request so that data\n//   // isn't shared between connections (which would be bad)\n//   if (typeof window === 'undefined') {\n//     return createApolloClient(initialState)\n//   }\n//   // Reuse client on the client-side\n//   if (!globalApolloClient) {\n//     globalApolloClient = createApolloClient(initialState)\n//   }\n//   return globalApolloClient\n// }\n// function createApolloClient(initialState = {}) {\n//   const ssrMode = typeof window === 'undefined'\n//   const cache = new InMemoryCache().restore(initialState)\n//   // Check out https://github.com/vercel/next.js/pull/4611 if you want to use the AWSAppSyncClient\n//   return new ApolloClient({\n//     ssrMode,\n//     link: createIsomorphLink(),\n//     cache,\n//   })\n// }\n// function createIsomorphLink() {\n//   if (typeof window === 'undefined') {\n//     const { SchemaLink } = require('apollo-link-schema')\n//     const { schema } = require('./schema')\n//     return new SchemaLink({ schema })\n//   } else {\n//     const { HttpLink } = require('apollo-link-http')\n//     return new HttpLink({\n//       uri: '/api/graphql',\n//       credentials: 'same-origin',\n//     })\n//   }\n// }\n// option A\n// import { ApolloClient } from 'apollo-client';\n// import { InMemoryCache } from 'apollo-cache-inmemory';\n// import withApollo from 'next-with-apollo';\n// import { createHttpLink } from 'apollo-link-http';\n// import fetch from 'isomorphic-unfetch';\n// // Update the GraphQL endpoint to any instance of GraphQL that you like\n// const GRAPHQL_URL = 'https://us1.prisma.sh/john-a-agudelo-e911b8/johnaagudelodb/dev';\n// const link = createHttpLink({\n//   fetch, // Switches between unfetch & node-fetch for client & server.\n//   uri: GRAPHQL_URL\n// });\n//  const client = withApollo(\n//   // You can get headers and ctx (context) from the callback params\n//   // e.g. ({ headers, ctx, initialState })\n//   ({ initialState }) =>\n//     new ApolloClient({\n//       link: link,\n//       cache: new InMemoryCache()\n//         //  rehydrate the cache using the initial data passed from the server:\n//         .restore(initialState || {})\n//     })\n// );\n// export default client;\n// option B\n// import { \n//     ApolloClient,\n//     HttpLink,\n//     InMemoryCache,\n// } from '@apollo/client';\n// import { useMemo } from 'react';\n// let apolloClient;\n// function createIsomorphicLink(){ \n// function cretApolloClient(){\n//     return new ApolloClient({\n//         ssrMode: window === 'undefined',\n//         link:createIsomorphicLink(),\n//         cache: new InMemoryCache()\n//     });\n// };\n// export function initializeApollo(initialState = null) {\n//     const _apolloClient = apolloClient ?? cretApolloClient();\n//     if (initialState) {\n//         _apolloClient.cache.restore(initialState)   \n//     }\n//     if(window === 'undefined') return _apolloClient;\n//         apolloClient = apolloClient ?? _apolloClient;\n//         return apolloClient;\n// };\n// export function useApollo(initialState){\n//   const store = useMemo(() => initializeApollo(initialState), [initialState]);\n//   return store;\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcG9sbG8vYXBvbGxvLmNsaWVudC5qcz82MTQ0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9BcG9sbG8vYXBvbGxvLmNsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gb3B0aW9uIENcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuLy8gaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbi8vIGltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuLy8gaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5cbi8vIGxldCBnbG9iYWxBcG9sbG9DbGllbnQgPSBudWxsO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gd2l0aEFwb2xsbyhQYWdlQ29tcG9uZW50LCB7IHNzciA9IHRydWUgfSA9IHt9KSB7XG4vLyAgIGNvbnN0IFdpdGhBcG9sbG8gPSAoeyBhcG9sbG9DbGllbnQsIGFwb2xsb1N0YXRlLCAuLi5wYWdlUHJvcHMgfSkgPT4ge1xuLy8gICAgIGNvbnN0IGNsaWVudCA9IGFwb2xsb0NsaWVudCB8fCBpbml0QXBvbGxvQ2xpZW50KGFwb2xsb1N0YXRlKVxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuLy8gICAgICAgICA8UGFnZUNvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuLy8gICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbi8vICAgICApXG4vLyAgIH1cblxuLy8gICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuLy8gICAgIGNvbnN0IGRpc3BsYXlOYW1lID1cbi8vICAgICAgIFBhZ2VDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgUGFnZUNvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnXG5cbi8vICAgICBpZiAoZGlzcGxheU5hbWUgPT09ICdBcHAnKSB7XG4vLyAgICAgICBjb25zb2xlLndhcm4oJ1RoaXMgd2l0aEFwb2xsbyBIT0Mgb25seSB3b3JrcyB3aXRoIFBhZ2VDb21wb25lbnRzLicpXG4vLyAgICAgfVxuLy8gICAgIFdpdGhBcG9sbG8uZGlzcGxheU5hbWUgPSBgd2l0aEFwb2xsbygke2Rpc3BsYXlOYW1lfSlgXG4vLyAgIH1cblxuLy8gICBpZiAoc3NyIHx8IFBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4vLyAgICAgV2l0aEFwb2xsby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4vLyAgICAgICBjb25zdCB7IEFwcFRyZWUgfSA9IGN0eFxuXG4vLyAgICAgICAvLyBJbml0aWFsaXplIEFwb2xsb0NsaWVudCwgYWRkIGl0IHRvIHRoZSBjdHggb2JqZWN0IHNvXG4vLyAgICAgICAvLyB3ZSBjYW4gdXNlIGl0IGluIGBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wYC5cbi8vICAgICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9IChjdHguYXBvbGxvQ2xpZW50ID0gaW5pdEFwb2xsb0NsaWVudCgpKVxuXG4vLyAgICAgICAvLyBSdW4gd3JhcHBlZCBnZXRJbml0aWFsUHJvcHMgbWV0aG9kc1xuLy8gICAgICAgbGV0IHBhZ2VQcm9wcyA9IHt9XG4vLyAgICAgICBpZiAoUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbi8vICAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuLy8gICAgICAgfVxuXG4vLyAgICAgICAvLyBPbmx5IG9uIHRoZSBzZXJ2ZXI6XG4vLyAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAgICAgLy8gV2hlbiByZWRpcmVjdGluZywgdGhlIHJlc3BvbnNlIGlzIGZpbmlzaGVkLlxuLy8gICAgICAgICAvLyBObyBwb2ludCBpbiBjb250aW51aW5nIHRvIHJlbmRlclxuLy8gICAgICAgICBpZiAoY3R4LnJlcyAmJiBjdHgucmVzLmZpbmlzaGVkKSB7XG4vLyAgICAgICAgICAgcmV0dXJuIHBhZ2VQcm9wc1xuLy8gICAgICAgICB9ICAgXG4vLyAgICAgICAvLyBPbmx5IGlmIHNzciBpcyBlbmFibGVkXG4vLyAgICAgICBpZiAoc3NyKSB7XG4vLyAgICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgLy8gUnVuIGFsbCBHcmFwaFFMIHF1ZXJpZXNcbi8vICAgICAgICAgICBjb25zdCB7IGdldERhdGFGcm9tVHJlZSB9ID0gYXdhaXQgaW1wb3J0KCdAYXBvbGxvL3JlYWN0LXNzcicpXG4vLyAgICAgICAgICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKFxuLy8gICAgICAgICAgICAgPEFwcFRyZWVcbi8vICAgICAgICAgICAgICAgcGFnZVByb3BzPXt7XG4vLyAgICAgICAgICAgICAgICAgLi4ucGFnZVByb3BzLFxuLy8gICAgICAgICAgICAgICAgIGFwb2xsb0NsaWVudCxcbi8vICAgICAgICAgICAgICAgfX1cbi8vICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgKVxuLy8gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICAgIC8vIFByZXZlbnQgQXBvbGxvIENsaWVudCBHcmFwaFFMIGVycm9ycyBmcm9tIGNyYXNoaW5nIFNTUi5cbi8vICAgICAgICAgICAvLyBIYW5kbGUgdGhlbSBpbiBjb21wb25lbnRzIHZpYSB0aGUgZGF0YS5lcnJvciBwcm9wOlxuLy8gICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWFwb2xsby5odG1sI2dyYXBocWwtcXVlcnktZGF0YS1lcnJvclxuLy8gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoaWxlIHJ1bm5pbmcgYGdldERhdGFGcm9tVHJlZWAnLCBlcnJvcilcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIC8vIGdldERhdGFGcm9tVHJlZSBkb2VzIG5vdCBjYWxsIGNvbXBvbmVudFdpbGxVbm1vdW50XG4vLyAgICAgICAgIC8vIGhlYWQgc2lkZSBlZmZlY3QgdGhlcmVmb3JlIG5lZWQgdG8gYmUgY2xlYXJlZCBtYW51YWxseVxuLy8gICAgICAgICBIZWFkLnJld2luZCgpXG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLy8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIEFwb2xsbyBzdG9yZVxuLy8gICAgIGNvbnN0IGFwb2xsb1N0YXRlID0gYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIC4uLnBhZ2VQcm9wcyxcbi8vICAgICAgIGFwb2xsb1N0YXRlLFxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyByZXR1cm4gV2l0aEFwb2xsb1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBpbml0QXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSkge1xuLy8gICAvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIGEgbmV3IGNsaWVudCBmb3IgZXZlcnkgc2VydmVyLXNpZGUgcmVxdWVzdCBzbyB0aGF0IGRhdGFcbi8vICAgLy8gaXNuJ3Qgc2hhcmVkIGJldHdlZW4gY29ubmVjdGlvbnMgKHdoaWNoIHdvdWxkIGJlIGJhZClcbi8vICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4vLyAgICAgcmV0dXJuIGNyZWF0ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpXG4vLyAgIH1cblxuLy8gICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXG4vLyAgIGlmICghZ2xvYmFsQXBvbGxvQ2xpZW50KSB7XG4vLyAgICAgZ2xvYmFsQXBvbGxvQ2xpZW50ID0gY3JlYXRlQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSlcbi8vICAgfVxuXG4vLyAgIHJldHVybiBnbG9iYWxBcG9sbG9DbGllbnRcbi8vIH1cblxuLy8gZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSA9IHt9KSB7XG4vLyAgIGNvbnN0IHNzck1vZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuLy8gICBjb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKCkucmVzdG9yZShpbml0aWFsU3RhdGUpXG5cbi8vICAgLy8gQ2hlY2sgb3V0IGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy9wdWxsLzQ2MTEgaWYgeW91IHdhbnQgdG8gdXNlIHRoZSBBV1NBcHBTeW5jQ2xpZW50XG4vLyAgIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbi8vICAgICBzc3JNb2RlLFxuLy8gICAgIGxpbms6IGNyZWF0ZUlzb21vcnBoTGluaygpLFxuLy8gICAgIGNhY2hlLFxuLy8gICB9KVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVJc29tb3JwaExpbmsoKSB7XG4vLyAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuLy8gICAgIGNvbnN0IHsgU2NoZW1hTGluayB9ID0gcmVxdWlyZSgnYXBvbGxvLWxpbmstc2NoZW1hJylcbi8vICAgICBjb25zdCB7IHNjaGVtYSB9ID0gcmVxdWlyZSgnLi9zY2hlbWEnKVxuLy8gICAgIHJldHVybiBuZXcgU2NoZW1hTGluayh7IHNjaGVtYSB9KVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIGNvbnN0IHsgSHR0cExpbmsgfSA9IHJlcXVpcmUoJ2Fwb2xsby1saW5rLWh0dHAnKVxuLy8gICAgIHJldHVybiBuZXcgSHR0cExpbmsoe1xuLy8gICAgICAgdXJpOiAnL2FwaS9ncmFwaHFsJyxcbi8vICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuLy8gICAgIH0pXG4vLyAgIH1cbi8vIH1cblxuXG5cblxuICAgICAgICBcblxuLy8gb3B0aW9uIEFcblxuLy8gaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG4vLyBpbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5Jztcbi8vIGltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ25leHQtd2l0aC1hcG9sbG8nO1xuLy8gaW1wb3J0IHsgY3JlYXRlSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG4vLyAvLyBVcGRhdGUgdGhlIEdyYXBoUUwgZW5kcG9pbnQgdG8gYW55IGluc3RhbmNlIG9mIEdyYXBoUUwgdGhhdCB5b3UgbGlrZVxuLy8gY29uc3QgR1JBUEhRTF9VUkwgPSAnaHR0cHM6Ly91czEucHJpc21hLnNoL2pvaG4tYS1hZ3VkZWxvLWU5MTFiOC9qb2huYWFndWRlbG9kYi9kZXYnO1xuXG4vLyBjb25zdCBsaW5rID0gY3JlYXRlSHR0cExpbmsoe1xuLy8gICBmZXRjaCwgLy8gU3dpdGNoZXMgYmV0d2VlbiB1bmZldGNoICYgbm9kZS1mZXRjaCBmb3IgY2xpZW50ICYgc2VydmVyLlxuLy8gICB1cmk6IEdSQVBIUUxfVVJMXG4vLyB9KTtcblxuLy8gIGNvbnN0IGNsaWVudCA9IHdpdGhBcG9sbG8oXG4vLyAgIC8vIFlvdSBjYW4gZ2V0IGhlYWRlcnMgYW5kIGN0eCAoY29udGV4dCkgZnJvbSB0aGUgY2FsbGJhY2sgcGFyYW1zXG4vLyAgIC8vIGUuZy4gKHsgaGVhZGVycywgY3R4LCBpbml0aWFsU3RhdGUgfSlcbi8vICAgKHsgaW5pdGlhbFN0YXRlIH0pID0+XG4vLyAgICAgbmV3IEFwb2xsb0NsaWVudCh7XG4vLyAgICAgICBsaW5rOiBsaW5rLFxuLy8gICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcbi8vICAgICAgICAgLy8gIHJlaHlkcmF0ZSB0aGUgY2FjaGUgdXNpbmcgdGhlIGluaXRpYWwgZGF0YSBwYXNzZWQgZnJvbSB0aGUgc2VydmVyOlxuLy8gICAgICAgICAucmVzdG9yZShpbml0aWFsU3RhdGUgfHwge30pXG4vLyAgICAgfSlcbi8vICk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsaWVudDtcblxuLy8gb3B0aW9uIEJcblxuLy8gaW1wb3J0IHsgXG4vLyAgICAgQXBvbGxvQ2xpZW50LFxuLy8gICAgIEh0dHBMaW5rLFxuLy8gICAgIEluTWVtb3J5Q2FjaGUsXG4vLyB9IGZyb20gJ0BhcG9sbG8vY2xpZW50Jztcbi8vIGltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbi8vIGxldCBhcG9sbG9DbGllbnQ7XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUlzb21vcnBoaWNMaW5rKCl7IFxuXG4vLyBmdW5jdGlvbiBjcmV0QXBvbGxvQ2xpZW50KCl7XG4vLyAgICAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuLy8gICAgICAgICBzc3JNb2RlOiB3aW5kb3cgPT09ICd1bmRlZmluZWQnLFxuLy8gICAgICAgICBsaW5rOmNyZWF0ZUlzb21vcnBoaWNMaW5rKCksXG4vLyAgICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXG4vLyAgICAgfSk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XG4vLyAgICAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmV0QXBvbGxvQ2xpZW50KCk7XG4vLyAgICAgaWYgKGluaXRpYWxTdGF0ZSkge1xuLy8gICAgICAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoaW5pdGlhbFN0YXRlKSAgIFxuLy8gICAgIH1cbi8vICAgICBpZih3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbi8vICAgICAgICAgYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IF9hcG9sbG9DbGllbnQ7XG4vLyAgICAgICAgIHJldHVybiBhcG9sbG9DbGllbnQ7XG4vLyB9O1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKGluaXRpYWxTdGF0ZSl7XG4vLyAgIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKTtcbi8vICAgcmV0dXJuIHN0b3JlO1xuLy8gfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Apollo/apollo.client.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Apollo/apollo.client */ \"./Apollo/apollo.client.js\");\n/* harmony import */ var _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/sue/Documents/GiftU_frontend/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n // import withData from '../util/apollo-client';\n\n\n // import { useApollo } from '../Apollo/apollo.client';\n// import { \n//   ApolloClient,\n//   HttpLink,\n//   InMemoryCache,\n// } from '@apollo/client';\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"createGlobalStyle\"]`\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  `;\nconst theme = {\n  colors: {\n    primary: '#0070f3'\n  }\n};\nfunction App({\n  Component,\n  pageProps\n}) {\n  // const client = useApollo(pageProps.initialApolloState);\n  // const client = new ApolloClient({\n  //   cache: new InMemoryCache(),\n  //   uri: 'https://us1.prisma.sh/john-a-agudelo-e911b8/johnaagudelodb/dev',\n  // });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(GlobalStyle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n    theme: theme,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloProvider\"], {\n    client: _Apollo_apollo_client__WEBPACK_IMPORTED_MODULE_3___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 3\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 4\n    }\n  })))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCOzs7Ozs7R0FBdEM7QUFRQSxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRTtBQURIO0FBREksQ0FBZDtBQU1lLFNBQVNDLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUVwRDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsU0FDRSxtRUFDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywrREFBRDtBQUFlLFNBQUssRUFBRUwsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNKLE1BQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFTSw0REFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsU0FBRCxlQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERCxDQURJLENBRkYsQ0FERjtBQVVEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuLy8gaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL3V0aWwvYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9BcG9sbG8vYXBvbGxvLmNsaWVudCc7XG5cbi8vIGltcG9ydCB7IHVzZUFwb2xsbyB9IGZyb20gJy4uL0Fwb2xsby9hcG9sbG8uY2xpZW50Jztcbi8vIGltcG9ydCB7IFxuLy8gICBBcG9sbG9DbGllbnQsXG4vLyAgIEh0dHBMaW5rLFxuLy8gICBJbk1lbW9yeUNhY2hlLFxuLy8gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgYDtcblxuY29uc3QgdGhlbWUgPSB7XG4gIGNvbG9yczoge1xuICAgIHByaW1hcnk6ICcjMDA3MGYzJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBcbiAgLy8gY29uc3QgY2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5pbml0aWFsQXBvbGxvU3RhdGUpO1xuXG4gIC8vIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAvLyAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICAvLyAgIHVyaTogJ2h0dHBzOi8vdXMxLnByaXNtYS5zaC9qb2huLWEtYWd1ZGVsby1lOTExYjgvam9obmFhZ3VkZWxvZGIvZGV2JyxcbiAgLy8gfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuXHRcdDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG5cdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0PC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });