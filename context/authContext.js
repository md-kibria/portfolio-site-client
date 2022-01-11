import React from 'react'
import { useContext, useEffect, useState } from 'react'
import axiosConfig from '../utils/axios-config'

export const BackendContext = React.createContext()

export function useHost() {
    return useContext(BackendContext)
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true)
    let host = process.env.NEXT_PUBLIC_LINK

    console.log(loading)
    // Set axios default link
    // useEffect(() => {
    //     axiosConfig(host)
    //     setLoading(false)
    // })

    if (loading) {
        axiosConfig(host)
        setLoading(false)
    }

    return (
        <BackendContext.Provider value={host}>
            {!loading && children}
        </BackendContext.Provider>
    )
}