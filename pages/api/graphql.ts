import type { IncomingMessage, ServerResponse } from 'http'
import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'

import models from '@/database/graphql/models/schema.gql'
import resolvers from '@/database/graphql/resolvers'

const cors = Cors({
  origin: process.env.CORS_ALLOWED_ORIGIN,
})

const server = new ApolloServer({ typeDefs: models, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

const startServer = server.start()

export default cors(async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await server.createHandler({ path: '/api/graphql' })(req, res)
})
