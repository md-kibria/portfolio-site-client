// Initial State
const initialState = {
    isLoading: true,
    data: {},
    errors: {}
}

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_DATA':
            return {
                data: action.payload.data,
                errors: {},
                isLoading: false
            }

        case 'ERROR':
            return {
                data: {},
                errors: action.payload.errors,
                isLoading: false
            }

        default:
            state
    }
}

export {
    initialState,
    reducer
}