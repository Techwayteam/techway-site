import type { AppProps } from 'next/app'
import '../styles/globals.css'
import WhatsAppButton from '../components/WhatsAppButton'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  )
}
