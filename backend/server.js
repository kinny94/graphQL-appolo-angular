import express from 'express'; 
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    }
}

const server = new ApolloServer({ typeDefs, resolvers});
server.applyMiddleware({ app });
  
app.listen(3000, () => {
    console.log('Express server running on port 4000');
});
