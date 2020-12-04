import { combineReducers } from 'redux';
import postReducer from './Post/postReducers';

const rootReducer = combineReducers({
    post: postReducer,
});

export default rootReducer;