export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const ADD_COMMENT = 'ADD_COMMENT';

export const handlePosts = (state, action) => {
  switch (action.type) {
    case 'ADD_POST': 
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
    case 'REMOVE_POST':
      let index = [];
      index = state.filter(i => {
        return i.id !== action.id
      })
      return index
    case 'ADD_COMMENT':
      let comments = [];
      comments.push(action.text);
      return {...state, comments}
    default:
      return state;
  }
};