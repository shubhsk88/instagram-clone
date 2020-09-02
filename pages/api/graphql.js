import { ApolloServer, gql } from 'apollo-server-micro';
import mongoose from 'mongoose';
import connectDB from '../../lib/mongoose';
const typeDefs = gql`
  type Query {
    me: String!
  }
`;

const resolvers = {
  Query: {
    me: () => 'hello',
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = apolloServer.createHandler({ path: '/api/graphql' });
export default conectDB(server);
