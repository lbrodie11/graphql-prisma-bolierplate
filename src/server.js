import { GraphQLServer, PubSub } from 'graphql-yoga'
import { resolvers, fragmentReplacements } from './resolvers/index'
import prisma from './prisma'

// Scalar types - String, Boolean, Int, Float, ID

// adding things to context makes them available for all resolver functions

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context (request) {
    return {
      pubsub,
      prisma,
      request
    }
  },
  fragmentReplacements
})

export { server as default }
