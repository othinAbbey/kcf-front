import '@/styles/globals.css'
import { AuthProvider } from "./authContext"
import Header from './header'
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      {/* <Header /> */}
      <Component {...pageProps} />
    </AuthProvider>
  )
  // return <Component {...pageProps} />
}
