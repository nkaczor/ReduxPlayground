import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
export default class Post extends Component {

  render() {
    var {post, id} = this.props;
    
    return (
      <div className="post">
       <Link to={'/api/thread/'+id} className="postLink"><h3>{post.get('title')}</h3></Link>
       <author>{'by '+post.get('author')}</author>
       <p>{post.get('selftext')}</p>
       <hr/>
     </div>

    );
  }
}
