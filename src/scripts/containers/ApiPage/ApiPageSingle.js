import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post';

class ApiPageSingle extends Component {

  render() {

    const { posts } = this.props;


    const post = posts.get(this.props.params.id);

    return (
      <section >
        <Post post={post} id={this.props.params.id}/>

      </section>
    );
  }
}


function select(state) {
  state=state.get('apiPage');
  return {
    posts: state.get('posts'),

  };
}
export default connect(select)(ApiPageSingle);
