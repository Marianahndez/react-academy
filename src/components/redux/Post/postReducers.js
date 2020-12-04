import  {
    ADD_POST,
    REMOVE_POST,
    ADD_COMMENT
} from './postTypes';

const INITIAL_STATE = {
    id: "",
    title: "",
    description: "",
    category: "",
    urlImg: "https://source.unsplash.com/random",
    comments: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_POST: 
          let aux = state.postList;
          aux.push({
            id: aux.length,
            title: action.post.title,
            description: action.post.description,
            category: action.post.category,
            urlImg: action.post.urlImg,
            comments: []
          });
          return {...state, postList: aux}
        case REMOVE_POST:
          let index = [];
          index = state.filter(i => {
            return i.id !== action.id
          })
          return index
        case ADD_COMMENT:
          let comments = [];
          comments.push(action.text);
          return {...state, comments}
        default:
          return state;
      }
}

export default reducer;