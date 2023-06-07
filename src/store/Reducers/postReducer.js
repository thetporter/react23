const initState = {
    loading: true,
    success: false,
    message: "Loading...",
    returned: [] || {}
}

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case "success":
            return {...state, ...action}
        case "failed":
            return {...state, ...action}
        case "validating":
            return {...state, message: "Validating received data..."}
        case "prefetch":
            return {...state, message: "Establishing connection..." }
        default:
            return {...state }
    }
}