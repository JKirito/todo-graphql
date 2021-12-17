console.log('Backend Progress');
const { ApolloServer } = require('apollo-server');
const typesDefs = require('./schema/type-defs');
const resolvers = require('./schema/resolvers');

const server = new ApolloServer({
  typeDefs: typesDefs,
  resolvers: resolvers,
  cors: {
    origin: '*',
  },
});

server.listen().then(({ url }) => {
  console.log(`Server up and running at url:- ${url}`);
});
