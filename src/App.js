import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import {Container} from 'reactstrap'
import cuid from 'cuid'
import StarWars from './starwar/StarWars'

class App extends Component{
  state = {
    posts : [{
      id : 1,
      text : "Hello world"
    },
    {
      id : 2,
      text : "Again Hello world"
    },
    {
      id : 3,
      text : "Bye bye"
    } ],
    showPost : false
  }
   showPostHandler = () =>{
    const show = this.state.showPost
    this.setState({showPost: !show})
  }
  addPost =(text)=>{
    const new_post = {
      id : cuid(),
      text : text
    }
    const posts = [...this.state.posts , new_post]
    this.setState({posts : posts})
  }
  deletePostHandler= (id)=>{
    console.log("deleted "+id)
    let posts = [...this.state.posts]
    posts = posts.filter(post=>post.id !== id)
    this.setState({posts})
  }
  updatePostHandler =(id)=>{
    console.log("update "+id)
  }
    render(){
      return (
            <Container>
              <PostForm add = {this.addPost}/>
              <hr/>
              <PostList
                posts = { this.state.posts }
                status = { this.state.showPost }
                show = { this.showPostHandler }
                delete = {this.deletePostHandler}
                update = {this.updatePostHandler}
                />
              <StarWars/>
            </Container>
      )
    }
}

export default App;
