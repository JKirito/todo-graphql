const resolvers = {
  Query: {
    todos: () => {
      return [
        {
          task: 'Temporary Data',
          completed: false,
        },
      ];
    },
  },
};

module.exports = resolvers;
