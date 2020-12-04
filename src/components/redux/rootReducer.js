import { combineReducers } from 'redux';
import postReducer from './Counter/counter.reducer';

const rootReducer = combineReducers({
    post: postReducer,
});

export default rootReducer;