import MainLayout from '@/layouts/main'

import type { AppProps } from 'next/app'
import '@/assets/css/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
