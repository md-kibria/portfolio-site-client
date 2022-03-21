import Heade from 'next/head'
import { useEffect } from 'react'
import axiosConfig from '../utils/axios-config'
import '../styles/globals.css'
import 'font-awesome/css/font-awesome.css'

function MyApp({ Component, pageProps }) {

  // axios config
  let host = process.env.NEXT_PUBLIC_URL
  
  axiosConfig(host)
  useEffect(() => {
    axiosConfig(host)
  }, [host])


  return (
    <>
      <Heade>
        <title>Portfolio | Md Kibria</title>
        <meta name="description" content="I am Md Kibria" />
      </Heade>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
