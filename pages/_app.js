import react from 'react'
import '../styles/globals.css'
import 'font-awesome/css/font-awesome.css'
import axiosConfig from '../utils/axios-config'
import { useContext } from 'react/cjs/react.production.min'
import { AuthProvider, useAuth, AuthContext } from '../context/authContext'

// Backend Host Context
export const BHContext = react.createContext('backend-host')


function MyApp({ Component, pageProps }) {

  // Backend Host Name <<<Need To Change On Production>>>
  let host = 'http://localhost:4000/'
  // axiosConfig(host)

  console.log('I am _app.js')


  
  return (
    <AuthProvider>
      < BHContext.Provider value={host}>
        <Component {...pageProps} />
      </BHContext.Provider >
    </AuthProvider>
  )
}

export default MyApp
