import axios from 'axios'
import { useReducer, useEffect } from 'react'
import {initialState, reducer} from './store'

const withSiteData = (OriginalComponent) => {
    const NewComponent = (props) => {

        // Use reducer
        const [state, dispatch] = useReducer(reducer, initialState)

        useEffect(() => {
            async function fetchData() {
                try {
                    // Get site data form backend server
                    const res = await axios.get('siteInfo')
    
                    // Dispatch data
                    dispatch({
                        type: 'LOAD_DATA',
                        payload: {
                            data: res.data.siteInfo
                        }
                    })
                } catch (err) {
                    // Dispatch error
                    dispatch({
                        type: 'ERROR',
                        payload: {
                            errors: err.response.data.errors
                        }
                    })
                }
            }

            fetchData()
        }, [])

        return (
            <OriginalComponent {...props} siteData={state.data} />
        )
    }

    return NewComponent
}

export default withSiteData
