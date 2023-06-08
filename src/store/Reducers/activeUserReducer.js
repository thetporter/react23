const initState = {
    logged: false,
    message: "Awaiting user",
    returned: {
        login: null,
        admin: false
    }
}

export const activeUserReducer = (state = initState, action) => {
    switch (action.type) {
        case "auser.set":
            return { ...state, ...action, logged: true, message: "v" };
        case "auser.off":
            return { ...state, logged: false, message: "Awaiting user", returned: {login: null, admin: false}};
        case "auser.fail":
            return { ...state, ...action, logged: false, returned: {login: null, admin: false} };
        default:
            return { ...state };
    }
}