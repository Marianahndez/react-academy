import  {
    ADD_POST,
    EDIT_POST,
    REMOVE_POST,
    ADD_COMMENT
} from './postTypes';

export const addPost = (postObj) => {
    return {
        type: ADD_POST,
        payload: postObj
    }
}

export const editPost = (postObj) => {
    return {
        type: EDIT_POST,
        payload: postObj
    }
}

export const removePost = (postID) => {
    return {
        type: REMOVE_POST,
        payload: postID
    }
}

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}