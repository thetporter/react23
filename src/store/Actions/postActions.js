export const getPost = async (dispatch, id) => {
    try {
        dispatch({type: "prefetch", loading: true, success: false})
        await fetch(`http://127.0.0.1:3090/posts/${id}`)
        .then(res => res.json())
        .then(res => {if (res && res.success && res.returned.length === 1) {
            dispatch({type: "success", loading: false, success: true, message: res.statMsg, returned: res.returned});
        }})
    } catch (error) {
        dispatch({type: "failed", loading: false, success: false, message: error.toString()});
    }
}

export const getPosts = async (dispatch) => {
    try {
        dispatch({type: "prefetch", loading: true, success: false})
        await fetch(`http://127.0.0.1:3090/posts`)
        .then(res => res.json())
        .then(res => {
        if (res && res.success && Array.isArray(res.returned) && res.returned.length > 0) {
            dispatch({type: "success", loading: false, success: true, message: res.statMsg, returned: res.returned});
        }})
    } catch (error) {
        dispatch({type: "failed", loading: false, success: false, message: error.toString()});
    }
}

export const makePost = async (dispatch, post) => {
    try {
        dispatch({type: "prefetch", loading: true, success: false})
        await fetch(`http://127.0.0.1:3090/posts/create`,{
            method: "POST", body: JSON.stringify(post), headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(res => {if (res && res.success) {
            dispatch({type: "success", loading: false, success: true, message: res.statMsg, returned: res.returned});
        }})
    } catch (error) {
        dispatch({type: "failed", loading: false, success: false, message: error.toString()});
    }
}

export const editPost = async (dispatch, post) => {
    try {
        dispatch({type: "prefetch", loading: true, success: false})
        console.log(post)
        await fetch(`http://127.0.0.1:3090/posts/${post.id}/update`, {
            method: "PUT", body: JSON.stringify(post), headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(res => {
            if (res && res.success) {
            dispatch({type: "success", loading: false, success: true, message: res.statMsg, returned: res.returned});
        }})
    } catch (error) {
        dispatch({type: "failed", loading: false, success: false, message: error.toString()})
    }
}