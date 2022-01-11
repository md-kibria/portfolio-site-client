import { useState } from 'react'
import axiosConfig from '../utils/axios-config'

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true)
    let host = process.env.NEXT_PUBLIC_LINK

    if (loading) {
        axiosConfig(host)
        setLoading(false)
    } else {
        axiosConfig(host)
    }

    return !loading && children
}