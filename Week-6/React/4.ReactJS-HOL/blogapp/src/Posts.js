import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
    this.setState({ hasError: true });
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const loadedPosts = data.map(item => new Post(item.userId, item.id, item.title, item.body));
        this.setState({ posts: loadedPosts });
      })
      .catch(error => {
        this.setState({ hasError: true });
        console.error("Error loading posts:", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.hasError ? (
          <p>Error loading posts.</p>
        ) : (
          this.state.posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <hr />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Posts;
