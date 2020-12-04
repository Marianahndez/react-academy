import  {
    ADD_POST,
    REMOVE_POST,
    ADD_COMMENT
} from './postTypes';

export const addPost = (postObj) => {
    console.log('reciving post: ', postObj)
    return {
        type: ADD_POST,
        payload: postObj
    }
}

export const removePost = (postID) => {
    return {
        type: REMOVE_POST,
        payload: postID
    }
}

export const addComment = () => {
    return {
        type: ADD_COMMENT
    }
}