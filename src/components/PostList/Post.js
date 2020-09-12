import React from 'react'
import {Button} from 'reactstrap'
const Post = (props) =>{
    return (<div>
        <h3>{props.post.text}</h3>
        <Button color = "danger" onClick = {()=>props.delete(props.post.id)}>Delete</Button>
        <Button color = "success" className = "ml-3" onClick = {()=>props.update(props.post.id)}>Update</Button>
    </div>)
}

export default Post;
