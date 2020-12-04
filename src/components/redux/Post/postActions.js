import  {
    ADD_POST,
    REMOVE_POST,
    ADD_COMMENT
} from './postTypes';

export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const removePost = () => {
    return {
        type: REMOVE_POST
    }
}

export const addComment = () => {
    return {
        type: ADD_COMMENT
    }
}