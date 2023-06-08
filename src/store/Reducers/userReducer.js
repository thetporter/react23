const initState = {
    loading: true,
    success: false,
    message: "Loading...",
    returned: []
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "user.success":
            return { ...state, ...action, loading: false, success: true, message: "v" };
        case "user.dbfailed":
            return { ...state, ...action, loading: false, success: false, message: "Database encountered an error:" };
        case "user.failed":
            return { ...state, ...action, loading: false, success: false, message: "Dispatch encountered an error:" };
        case "user.prefetch":
            return { ...state, loading: true, success: false, message: "Establishing connection..."}
        default:
            return { ...state };
    }
}