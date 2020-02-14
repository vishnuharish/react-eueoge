import React from 'react';
import {database} from '../database/config';
const PostsWithProps = WrappedComponent => 
        class PostsHOC extends React.Component {
            constructor(){
                super();
                this.state = {
                    posts: []
                }
            }
            componentDidMount(){
                database.ref('posts').once('value').then((snapshot) => {
                    let posts = []
                    snapshot.forEach((child) => { posts.push(child.val())})
                    this.setState({
                        posts: posts
                    })
                })
            }

            render(){
                return <WrappedComponent posts = {this.state.posts}/>
            }
        }



export {PostsWithProps}