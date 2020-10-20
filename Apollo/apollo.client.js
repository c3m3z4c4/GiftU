import { 
    ApolloClient,
    HttpLink,
    InMemoryCache,
} from '@apollo/client';
import { useMemo } from 'react';

let apolloClient;

function createIsomorphicLink(){
    //checamos si estamos en server o client
    if(window === "undefined") {
        // here we are in server 
        const { SchemaLink } = require('@apollo/client/link/schema');
        // aqui requwerimos nuestro schema:
        const { schema } = require('./schema');
        return new SchemaLink({ schema })

    } else {
        // here we are in client
        const { HttpLink } = require('@apollo/client/link/http')
       return new HttpLink({
            // uri: 'aqui va la url de api. ejemplo '
            uri: '/api/graphql',
    });
    }
};
function cretApolloClient(){
    return new ApolloClient({
        //where is rendering in server side mode 
        ssrMode: window === 'undefined',
        link:createIsomorphicLink(),
        // where store resolts of queries 
        cache: new InMemoryCache()
    });
};

export function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? cretApolloClient();
    if (initialState) {
        _apolloClient.cache.restore(initialState)   
    }
    if(window === 'undefined') return _apolloClient;
        apolloClient = apolloClient ?? _apolloClient;
        return apolloClient;
};

export function useApollo(initialState){
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};