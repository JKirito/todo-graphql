const { gql } = require('apollo-server');

const typesDefs = gql`
  type Todo {
    task: String!
    completed: Boolean!
  }
  type Query {
    todos: [Todo!]!
  }
`;

module.exports = typesDefs;
