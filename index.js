import React, { Component } from 'react';
import { render } from 'react-dom';
import Posts from './components/Posts';
import ListPosts from './components/ListPosts';
import {PostsWithProps} from './components/PostsHOC';

import './style.css';

class App extends Component {
  render(){
    const ListPostsWithProps = PostsWithProps(ListPosts);
    return(
        <div>
        <h1>Render Props</h1>
        <Posts render = {({posts}) => <ListPosts posts = {posts}/>} />
        <hr />
        <h1> HOC</h1>
        <ListPostsWithProps />
    </div>
    )
  }
}

render(<App />, document.getElementById('root'));
