import  {
    ADD_POST,
    EDIT_POST,
    REMOVE_POST,
    ADD_COMMENT
} from './postTypes';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_POST: 
          state.push({
            id: state.length,
            title: action.payload.title,
            description: action.payload.description,
            category: action.payload.category,
            urlImg: action.payload.urlImg,
            comments: []
          });
          return state
        case EDIT_POST: 
          const aux = state.findIndex(i => i.id === action.payload.id)
          state[aux] = action.payload;
          return state;
        case REMOVE_POST:
          let index = [];
          index = state.filter(i => {
            return i.id !== action.payload
          })
          return index
        case ADD_COMMENT:
          let comments = [];
          comments.push(action.payload);
          return state
        default:
          return state
      }
}

export default reducer;