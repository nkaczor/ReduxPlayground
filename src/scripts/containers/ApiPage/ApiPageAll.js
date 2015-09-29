import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post';
import ErrorAlert from '../../components/ErrorAlert';
import Spinner from '../../components/Spinner';

class ApiPageAll extends Component {

  render() {

    const { isFetching, posts, errorMessage, selectedReddit } = this.props;


    function renderPosts(){

      if(isFetching)
        return <Spinner/>;
      else if(errorMessage.length>0){
        return <ErrorAlert text={errorMessage}/>;}
      else
        return(posts.map((post, index) =>
           <Post post={post} id={index}/>
      ));
    }

    return (
      <section >

        <h2>Posts from <strong>{selectedReddit}</strong>:</h2>
        {renderPosts()}

      </section>
    );
  }
}


function select(state) {
  state=state.get('apiPage');
  return {
    selectedReddit: state.get('selectedReddit'),
    posts: state.get('posts'),
    isFetching: state.get('isFetching'),
    errorMessage: state.get('errorMessage')
  };
}
export default connect(select)(ApiPageAll);
