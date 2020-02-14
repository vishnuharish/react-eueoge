import React ,{Component} from 'react';

class ListPosts extends Component {
    render() {
        return (
            <ol>
                {
                    this.props.posts.map((post, index) => <li key={post.id}>{post.description}</li>  )   
                }
            </ol>    
        )
    }
}

export default ListPosts