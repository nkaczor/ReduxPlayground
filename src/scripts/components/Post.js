import React, { Component, PropTypes } from 'react';
export default class Post extends Component {

  render() {
    var {post} = this.props;
    return (
      <div className="post">
       <h3>{post.get('title')}</h3>
       <author>{'by '+post.get('author')}</author>
       <p>{post.get('selftext')}</p>
       <hr/>
     </div>

    );
  }
}
