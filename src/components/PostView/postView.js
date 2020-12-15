import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ThemeContext, { theme } from '../../styles/theme-context';
import { addComment } from '../redux/Post/postActions';

import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import HeaderTitle from '../Header/HeaderTitle';

function PostView(props){
    let { slug } = useParams();
    const dispatch = useDispatch();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState('');
    const postsOfProps = props.location.aboutProps.posts;


    useEffect(()=>{
        let aux = {}

        postsOfProps.map(i => {
            if(i.id == slug){
                aux = i
            }
        })

        setPost(aux);
    },[])

    const handleAddingComment = (e) => {
        e.preventDefault();
        post.comments.push( comment )
        dispatch(addComment(post.comments));
        setComment('')
    }

    const onChangeInput = (e) => {
        e.preventDefault();
        setComment(e.target.value);
    }

    const banerStyle = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: `url(${post.urlImg})`,
        height: '80vh',
        width: '100%',
        padding: '2rem'
    }
    
    return(
        <ThemeContext.Provider value={theme}>
            <Grid container spacing={0}>
                <HeaderTitle theme={theme} />
                <div style={banerStyle}>
                    <Button style={theme.postView.button}><Link to="/" style={theme.globalStyles.links}> <ArrowBackIosIcon style={theme.postView.icon} /> View Posts </Link></Button>
                    <h1 style={theme.postView.title}>{ post.title }</h1>
                </div>
                <Grid container style={theme.postView.dataContianer}>
                    <p style={theme.postView.description}> {post.description} </p>
                    <div style={theme.postView.comentsContainer}>
                        <h2>Comments</h2>
                        {post.comments ? 
                            post.comments.map((comments, i) => {
                            return (
                                <div style={theme.postView.comments}>
                                    <div>
                                        <AccountCircleIcon style={theme.postView.iconUser} />
                                    </div>
                                    <div style={theme.postView.headerContainer}>
                                        <h4 style={theme.postView.commentsTitle}>Joe Doe</h4>
                                        <p>{comments}</p>
                                    </div>
                                </div>
                            )}) :
                            <p>No comments yet</p>
                        }
                    </div>
                    
                    <form noValidate autoComplete="off" className="form" onSubmit={handleAddingComment} style={theme.postView.form}>
                        <TextField name="comment" label="Write a comment" value={comment} onChange={onChangeInput} style={theme.dialog.MuiFormControlRoot}/>
                        <Button variant="contained" color="primary" type="submit" style={theme.postView.form.button}>Add</Button>
                    </form>
                </Grid>
            </Grid>     
        </ThemeContext.Provider>
    )
}

export default PostView;