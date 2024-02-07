const { User } = require('../models')

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('savedBooks')
        }
    }
}

module.exports = resolvers;