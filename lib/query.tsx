import React, { ReactNode } from 'react'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from '@tanstack/react-query'

type Props = {
  children: ReactNode | ReactNode[]
  pageProps: any
}

const QueryClientProvider = ({ children, pageProps }: Props) => {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <ReactQueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </ReactQueryClientProvider>
  )
}

export { QueryClientProvider }
