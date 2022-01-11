import React from 'react'
import {AuthProvider, useAuth} from '../context/authContext'
import Test from '../context/test'

const test = () => {
    return (
        <AuthProvider>
            I am Test
        </AuthProvider>
        // <Test />
    )
}

export default test
