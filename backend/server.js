import express from 'express'; 
import { ApolloServer, gql } from 'apollo-server-express';

import schema from './schema';

const app = express();

const server = new ApolloServer({schema});
server.applyMiddleware({ app });
  
app.listen(3000, () => {
    console.log('Express server running on port 4000');
});
