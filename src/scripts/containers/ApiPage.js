import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ApiActions from '../actions/apiActions'

class ApiPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: ''
    };
  }
  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      const { dispatch } = this.props;
      const actions = bindActionCreators(ApiActions, dispatch);
      actions.selectReddit(text);
      actions.fetchPosts(text);
    }
  }
  handleChange(e){
    this.setState({
      text: e.target.value
    });
  }
  render() {

    return (
      <header>
      <input
       type="text"
       autoFocus="true"
       value={this.state.text}
       onChange={this.handleChange.bind(this)}
       onKeyDown={this.handleSubmit.bind(this)} />
       {this.props.posts.map(post =>
          <div>
           <h3>{post.get('author')+": "+ post.get('title')}</h3>
           <p>{post.get('selftext')}</p>
           <hr/>
         </div>

     )}
      </header>
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
