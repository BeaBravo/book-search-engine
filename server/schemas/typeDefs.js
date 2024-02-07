const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
    }
    
    type Query {
        users: [User]
    }`

module.exports = typeDefs