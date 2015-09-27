import React, { Component, PropTypes } from 'react';
export default class Post extends Component {

  render() {
    var {post} = this.props;  
    return (
      <div>
       <h3>{post.get('author')+": "+ post.get('title')}</h3>
       <p>{post.get('selftext')}</p>
       <hr/>
     </div>

    );
  }
}
