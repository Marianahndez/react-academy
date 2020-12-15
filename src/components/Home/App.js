import { useContext, useReducer, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import BarCategoriesNavigation from '../CategoriesNavigation/BarCategoriesNavigation';
import PostsContainer from '../PostsContainer/PostsContainer';
import ThemeContext, { theme } from '../../styles/theme-context';
import { Dialog, DialogContent, TextField, InputLabel, Select, MenuItem, FormControl, Button } from '@material-ui/core';
import { GlobalContext, PostContext } from '../../providers/global-context';
import ButtonAddAndEdit from '../ButtonAddAndEdit/ButtonAddAndEdit';
import { handlePosts } from '../../providers/reducers';
import HeaderTitle from '../Header/HeaderTitle';

function ModalAddEdit({
  actionTypeRecived, 
  openDialog, 
  categories, 
  post,
  onChangeInput,
  handleClickClose, 
  handleAddingPost, 
  handleEditPost, 
  theme}){

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
          actionTypeRecived === 'Create Post' ?
          <Button variant="contained" color="primary" type="submit" onClick={handleAddingPost} style={theme.dialog.button}>Save</Button>
          :
          <Button variant="contained" color="primary" onClick={handleEditPost} style={theme.dialog.button}>Save changes</Button>
        }
        <Button variant="contained" onClick={handleClickClose} style={theme.dialog.button}>Cancel</Button>
        </form>
      </DialogContent>
    </Dialog> 
  )
}

function App() {
    const MainData = useContext(GlobalContext);
    const [mainData, dispatch] = useReducer(handlePosts, MainData);
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState("");
    const [postToShow, setPostToShow] = useState(mainData.postList);
    const [category, setCategory] = useState(mainData.categories[0]);
    const [post, setPost] = useState({
      id: "",
      title: "",
      description: "",
      category: "",
      urlImg: "https://source.unsplash.com/random",
      comments: []
    });

    useEffect(()=>{
      // if(!open){
      //   setPost()
      // }
      // console.log('category : ', category)
      // let postByCategory = mainData.postList.forEach(newArray => newArray.category === category ) 
      // console.log('postByCategory: ', postByCategory)
      // setSendPosts(postByCategory)
    }, [category])
  
    // const handleCategories = (e) => {
    //   setCategory(e)
    // }

    const handleInputChange = (e) => {
      const newPost = {...post};
      newPost[e.target.name] = e.target.value;
      e.preventDefault();
      setPost(newPost)
    }

    const AddPost = (event) => {
      event.preventDefault();
      dispatch({type: 'ADD_POST', post: post});
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

    const EditPost = (event) => {
      event.preventDefault();
      dispatch({type: 'EDIT_POST', post: post})
      setOpen(false)
    }

    const handleModalOpen = (action) => {
      setPost({
        id: "",
        title: "",
        description: "",
        category: "",
        urlImg: "https://source.unsplash.com/random",
        comments: []
      });
      setOpen(true)
      setAction(action)
    }

    const handleModalEditPost = (action, post) => {
      // Enviar post con las modificaciones
      // findIndex
      setPost(post)
      setOpen(true)
      setAction(action)
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
          categories={mainData.categories} 
          post={post}
          onChangeInput={handleInputChange}
          handleClickClose={handleModalClose} 
          handleAddingPost={AddPost} 
          handleEditPost={EditPost} 
          theme={theme} 
        />

        <Grid container spacing={0}>
          <HeaderTitle theme={theme} />
          <Grid item xs={12}>
            <ButtonAddAndEdit theme={theme} buttonType={true} clickOpen={() => handleModalOpen("Create Post")}  />
            <BarCategoriesNavigation chageCategory={newcategory => setCategory(newcategory)} theme={theme} categories={mainData.categories} />
            <PostsContainer 
              clickOpenEdit={(post) => {handleModalEditPost("Edit Post", post)}} 
              posts={mainData.postList} 
              theme={theme} 
            />
          </Grid>
        </Grid>
        </ThemeContext.Provider>
      </PostContext>
    );   
}

export default App;
