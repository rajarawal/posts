import React from 'react'
import Post from './Post'
import {Button} from 'reactstrap'

const PostList =(props)=> {
    return(
        <div>
            <Button color ="primary" onClick = {props.show}>{!props.status ? 'Show Post' : 'HidePost'}</Button>
            { props.status && props.posts.map(post =>{
                return (<Post key = {post.id} post = {post} delete = {props.delete} update = {props.update}/>)
            })}
        </div>
    )
}

export default PostList;
