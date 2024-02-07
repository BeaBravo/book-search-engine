const express = require('express');
//require @apollo/server
const { ApolloServer } = require('@apollo/server')
//require express middleware from apollo
const { expressMiddleware } = require('@apollo/server/express4')
const path = require('path');
//bring in the typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection');

//this line will be deleted before submitting
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

//create apollo server 
const server = new ApolloServer({
  typeDefs,
  resolvers
})

//start apollo server
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server));

  //will be deleted
  app.use(routes);

  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build/')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
  }
  //start db
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`)
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`)
    });
  });
}

startApolloServer();





