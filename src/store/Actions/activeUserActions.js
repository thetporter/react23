export const setUser = (dispatch, user) => {
    try {
        console.log(user)
        dispatch({type:"auser.set", returned: {login: user.login, admin: user.admin}})
    } catch (error) {
        console.log(error.toString())
        dispatch({type:"auser.fail", message: error.toString()})
    }
}

export const exUser = (dispatch) => {
    dispatch({type:"auser.off"})
}