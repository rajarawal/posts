import React , {Component} from 'react'
import {Form ,Input ,Button} from 'reactstrap'
class PostForm extends Component{
  state ={
    post: ''
  }
  postChangeHandler = (e) =>{
    this.setState({post:e.target.value})
  }
  postCreateHandler =(e)=>{
    e.preventDefault()
    const post = this.state.post
      if(this.state.post.length > 3){
        this.props.add(post)
      }
      this.setState({post:""})
  }
    render(){
        return(
            <div>
                <h1>Create post here </h1>
                <Form onSubmit = {this.postCreateHandler}>
                  <Input type="text" className = "form-control" value = {this.state.post} onChange = {this.postChangeHandler}/>
                  <Button color ="info" className="mt-2">Post</Button>
                </Form>
            </div>
        )
    }
}

export default PostForm;
