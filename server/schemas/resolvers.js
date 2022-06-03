const {User} = require('../models')

const resolvers = {
 Mutation: {
     addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
    //   const token = signToken(user);
      return { username };
    },
 }
}

module.exports = resolvers;