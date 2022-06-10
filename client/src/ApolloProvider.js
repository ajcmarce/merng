import React from 'react';
import App from './App';

import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
    url: "http://localhost:8080"
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)