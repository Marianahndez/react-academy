import React, {useReducer, useContext} from 'react';
import { Button, GridList, GridListTile } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonAddAndEdit from '../ButtonAddAndEdit/ButtonAddAndEdit';
import { handlePosts } from '../../providers/reducers';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../providers/global-context';

export function PostsContainer({clickOpenEdit, theme}) {
    const MainData = useContext(GlobalContext);
    const [mainData, dispatch] = useReducer(handlePosts, MainData.postList);

    return(
        <GridList cols={2} style={theme.post.postsContainer}>
            {mainData.map((post, i) => {
                let url = "/post/" + JSON.stringify(post.id);
                return(
                    <GridListTile style={theme.post.container} key={i}>
                    <Link to={url} style={theme.globalStyles.links}>
                        <h1 style={theme.post.title}>{post.title}</h1>
                        <div>
                            <p style={theme.post.comments}>0 Comments </p>
                            <p style={theme.post.description}>{post.description}</p>
                            <p style={theme.post.category}>{post.category}</p>
                        </div>
                    </Link>
                    <div style={theme.post.absoluteBtns}>
                        <ButtonAddAndEdit buttonType={false} clickOpenEdit={clickOpenEdit} theme={theme} />
                        <Button style={theme.post.absoluteBtns.white} onClick={()=> dispatch({type: 'REMOVE_POST', id: post.id})}><DeleteIcon /></Button>
                    </div>
                </GridListTile>
                )
            })}
        </GridList> 
    )
}
export default PostsContainer;