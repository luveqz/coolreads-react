import { GraphQLClient } from 'graphql-request'
import { QueryClient } from '@tanstack/react-query'

import { getSdk } from '@/.output/graphql'

const client = new GraphQLClient(`${process.env.NEXT_PUBLIC_HOST}/api/graphql`)

export const { getUserByUsername } = getSdk(client)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
})
