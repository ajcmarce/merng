const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const { MONGODB } = require('./config');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true})
    .then(res => {
        console.log('MongoDB connected!');
        server.listen({ port: 8080})
            .then(res => {
                console.log(`Server running at ${res.url}`)
            });
        });