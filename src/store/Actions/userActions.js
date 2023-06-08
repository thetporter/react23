export const createUser = (dispatch, user) => {
    try {
        dispatch({type: "user.prefetch"})
        fetch("http://127.0.0.1:3090/register", {
            method: "POST", body: JSON.stringify(user), headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(res => {
            if (res && res.success && res.returned[0]) {
                dispatch({type: "user.success", returned: res.returned[0]})
            } else if (res && !res.success) {
                dispatch({type: "user.dbfailed", returned: res.returned[0]})
            }
        })
    } catch (error) {
        dispatch({type: "user.failed", returned: error.toString()})
    }
}

export const validateUser = (dispatch, user) => {
    try {
        dispatch({type: "user.prefetch"})
        fetch("http://127.0.0.1:3090/login", {
            method: "PUT", body: JSON.stringify(user), headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(res => {
            if (res && res.success && res.returned.length === 1) {
                dispatch({type: "user.success", returned: res.returned[0]})
            } else if (res && !res.success) {
                dispatch({type: "user.dbfailed", returned: res.returned[0]})
            }
        })
    } catch (error) {
        dispatch({type: "user.failed", returned: error.toString()})
    }
}