import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../features/store'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
