import express from 'express'; 
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose'; 
import cors from 'cors';

import schema from './schema';

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost/graphqlserver', {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established');
});  

const server = new ApolloServer({schema});
server.applyMiddleware({ app });
  
app.listen(3000, () => {
    console.log('Express server running on port 4000');
});
