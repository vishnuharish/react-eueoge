import React, {Component} from 'react';
import {database} from '../database/config';
class Posts extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        database.ref('posts').once('value').then((snapshot) => {
            let posts = [];
            snapshot.forEach(childSnapshot => {
                posts.push(childSnapshot.val())
            });
            this.setState({
                posts : posts
            })
        })
    }

    render(){
        return(
            this.props.render({
                posts: this.state.posts
            })
        )
    }
}

export default Posts