import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Post from '../components/Post';
import RedditChooser from '../components/RedditChooser';
import Spinner from '../components/Spinner';
import * as ApiActions from '../actions/apiActions';

class ApiPage extends Component {

  render() {

    const { dispatch, isFetching, posts, selectedReddit } = this.props;
    const actions = bindActionCreators(ApiActions, dispatch);
    function onSelect(text){
        actions.selectReddit(text);
        actions.fetchPosts(text);
      }

    function renderPosts(){
      if(isFetching)
        return <Spinner/>;
      else
        return(posts.map(post =>
           <Post post={post}/>
      ));
    }

    return (
      <section className="apiPage">
        <h1>Reddit Api</h1>
        <RedditChooser onSelect={onSelect}/>
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
    isFetching: state.get('isFetching')
  };
}
export default connect(select)(ApiPage);
