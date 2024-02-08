const typeDefs = `
    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String

    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        users: [User]!
        me: User
    }
    
    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String, username: String, password: String!): Auth
    }`

module.exports = typeDefs