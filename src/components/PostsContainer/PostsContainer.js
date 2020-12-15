import { Button, GridList, GridListTile } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonAddAndEdit from '../ButtonAddAndEdit/ButtonAddAndEdit';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removePost } from '../redux/Post/postActions';

export function PostsContainer({clickOpenEdit, theme, posts}) {
    const dispatch = useDispatch();

    return(
        <GridList cols={2} style={theme.post.postsContainer}>
            {posts.map((post, i) => {
                let url = "/post/" + JSON.stringify(post.id);
                return(
                    <GridListTile style={theme.post.container} key={i}>
                    <Link to={{
                        pathname: url,
                        aboutProps:{posts}
                    }} style={theme.globalStyles.links}>
                        <h1 style={theme.post.title}>{post.title}</h1>
                        <div>
                            <p style={theme.post.comments}>0 Comments </p>
                            <p style={theme.post.description}>{post.description}</p>
                            <p style={theme.post.category}>{post.category}</p>
                        </div>
                    </Link>
                    <div style={theme.post.absoluteBtns}>
                        <ButtonAddAndEdit buttonType={false} clickOpenEdit={() => clickOpenEdit(post)} theme={theme} />
                        <Button style={theme.post.absoluteBtns.white} onClick={()=> dispatch(removePost(post.id))}><DeleteIcon /></Button>
                    </div>
                </GridListTile>
                )
            })}
        </GridList> 
    )
}
export default PostsContainer;