const initState = {
    loading: true,
    success: false,
    message: "Loading...",
    returned: [] || {}
}

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case "post.success":
            return {...state, ...action}
        case "post.failed":
            return {...state, ...action}
        case "post.prefetch":
            return {...state, message: "Establishing connection..." }
        default:
            return {...state }
    }
}