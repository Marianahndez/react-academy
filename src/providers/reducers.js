export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
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
    case 'EDIT_POST':
      let auxArray = state.postList;
      let editPost = auxArray.findIndex(i => i.id === action.post.id);
      console.log('editPost ', editPost);
      console.log('new post ', action.post);
      auxArray[editPost] = action.post;
      
      return state 
    case 'ADD_COMMENT':
      let comments = [];
      comments.push(action.text);
      return {...state, comments}
    default:
      return state;
  }
};