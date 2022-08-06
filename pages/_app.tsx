import React from 'react'
import type { AppProps } from 'next/app'

import { QueryClientProvider } from '@/lib/query'
import { AuthProvider } from '@/lib/auth'
import MainLayout from '@/layouts/main'
import '@/assets/css/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider pageProps={pageProps}>
      <AuthProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default MyApp
