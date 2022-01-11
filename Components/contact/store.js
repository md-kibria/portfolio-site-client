// Initial State
const initialState = {
    contactInfo: {},
    errors: {},
    msg: '',
    isLoading: true
}

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_CONTACT':
            return {
                contactInfo: action.payload.contactInfo,
                errors: { ...state.errors },
                msg: state.msg,
                isLoading: false
            }

        case 'SEND_MSG':
            return {
                contactInfo: {...state.contactInfo},
                errors: { ...state.errors },
                msg: action.payload.msg,
                isLoading: false
            }

        case 'ERROR':
            return {
                contactInfo: { ...state.contactInfo },
                errors: action.payload.errors,
                msg: state.msg,
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
