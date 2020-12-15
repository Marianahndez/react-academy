import { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { addPost, editPost } from '../redux/Post/postActions';
import ThemeContext, { theme } from '../../styles/theme-context';
import { PostContext } from '../../providers/global-context';

import BarCategoriesNavigation from '../CategoriesNavigation/BarCategoriesNavigation';
import PostsContainer from '../PostsContainer/PostsContainer';
import ButtonAddAndEdit from '../ButtonAddAndEdit/ButtonAddAndEdit';
import HeaderTitle from '../Header/HeaderTitle';

import Grid from '@material-ui/core/Grid';
import { 
  Dialog, 
  DialogContent, 
  TextField, 
  InputLabel, 
  Select, 
  MenuItem, 
  FormControl, 
  Button 
} from '@material-ui/core';

function ModalAddEdit({
  actionTypeRecived, 
  openDialog, 
  categories, 
  post,
  onChangeInput,
  handleClickClose, 
  handleUpdatePost,
  handleAddingPost, 
  theme
}){

  return (
    <Dialog open={openDialog} onClose={handleClickClose} fullWidth={true} maxWidth={'sm'}>
      <h2 style={theme.globalStyles.titleH2}>{actionTypeRecived}</h2>
      <DialogContent>
        <form noValidate autoComplete="off" className="form" onSubmit={handleAddingPost} style={theme.dialog.form}>
          <TextField name="title" label="Title" value={post.title} onChange={onChangeInput} style={theme.dialog.MuiFormControlRoot} required/>
          <TextField name="description" label="Description" value={post.description} onChange={onChangeInput} style={theme.dialog.MuiFormControlRoot} required/>
          <FormControl style={theme.dialog.MuiFormControlRoot}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
            name="category"
            labelId="demo-simple-select-label"
            value={post.category}
            onChange={onChangeInput}
            required
            >
              {categories.map((category, i) => 
                <MenuItem key={i} value={category}>{category}</MenuItem>
              )}
            </Select>
        </FormControl>
        <TextField name="urlImg" label="Image URL" value={post.urlImg} onChange={onChangeInput} style={theme.dialog.MuiFormControlRoot} required/>
        {
          actionTypeRecived !== 'Create Post' ? 
          <Button variant="contained" color="primary" type="submit" onClick={handleUpdatePost} style={theme.dialog.button}>Save Changes</Button> :
          <Button variant="contained" color="primary" type="submit" onClick={handleAddingPost} style={theme.dialog.button}>Save</Button>
        }
        <Button variant="contained" onClick={handleClickClose} style={theme.dialog.button}>Cancel</Button>
        </form>
      </DialogContent>
    </Dialog> 
  )
}

function mapStateToProps(state){
  return {
    posts: state.post
  }
}

function App(props) {
  const dispatch = useDispatch();
  const categories =  ['All', 'Travel', 'Lifestyle', 'Business', 'Food', 'Work'];
  const [postToShow, setPostToShow] = useState(props.posts);
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [post, setPost] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
    urlImg: "https://source.unsplash.com/random",
    comments: []
  });

  useEffect(()=>{
    if(props.posts !== ''){
      const newPostList = props.posts.filter(i => {
        return i.category === category
      })
      setPostToShow(newPostList)
    }

    if(category === 'All'){
      setPostToShow(props.posts)
    }
  }, [category, postToShow])

  const handleCategory = (newCategory) => {
    setCategory(newCategory)
    console.log('categories in props: ', newCategory);
  }

  const handleInputChange = (e) => {
    const newPost = {...post};
    newPost[e.target.name] = e.target.value;
    e.preventDefault();
    setPost(newPost)
  }

  const AddPost = (event) => {
    event.preventDefault();
    dispatch(addPost(post));
    setPost({
      id: "",
      title: "",
      description: "",
      category: "",
      urlImg: "https://source.unsplash.com/random",
      comments: []
    });
    setOpen(false)
  }

  const handleModalOpen = (action) => {
    setOpen(true)
    setPost({
      id: "",
      title: "",
      description: "",
      category: "",
      urlImg: "https://source.unsplash.com/random",
      comments: []
    })
    setAction(action)
  }

  const handleModalEditPost = (action, post) => {
    setPost(post)
    setOpen(true)
    setAction(action)
  }

  const updatePost = (event) => {
    event.preventDefault();
    dispatch(editPost(post))
    setOpen(false)
  }

  const handleModalClose = () => {
    setOpen(false)
  }

  return (
    <PostContext>
      <ThemeContext.Provider value={theme}>
        <ModalAddEdit 
          actionTypeRecived={action} 
          openDialog={open} 
          categories={categories} 
          post={post}
          onChangeInput={handleInputChange}
          handleClickClose={handleModalClose} 
          handleAddingPost={AddPost} 
          handleUpdatePost={updatePost} 
          theme={theme} 
        />

        <Grid container spacing={0}>
          <HeaderTitle theme={theme} />
          <Grid item xs={12}>
            <ButtonAddAndEdit theme={theme} buttonType={true} clickOpen={() => handleModalOpen("Create Post")}  />
            <BarCategoriesNavigation chageCategory={(newcategory) => handleCategory(newcategory)} theme={theme} categories={categories} />
            <PostsContainer 
              clickOpenEdit={(post) => handleModalEditPost("Edit Post", post)}
              posts={postToShow} 
              theme={theme} 
            />
          </Grid>
        </Grid>
      </ThemeContext.Provider>
    </PostContext>
  );   
}

export default connect(mapStateToProps)(App);
