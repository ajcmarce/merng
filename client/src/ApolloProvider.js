import React from 'react';
import App from './App';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)