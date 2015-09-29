import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link} from 'react-router';

import RedditChooser from '../components/RedditChooser';

import * as ApiActions from '../actions/apiActions';

class ApiPage extends Component {

  render() {

    const { dispatch } = this.props;
    const actions = bindActionCreators(ApiActions, dispatch);
    function onSelect(text){
        actions.selectReddit(text);
        actions.fetchPosts(text);
      }



    return (
      <section className="apiPage">
        <h1>Reddit Api</h1>
        <RedditChooser onSelect={onSelect}/>
        {this.props.children}

      </section>
    );
  }
}



export default connect()(ApiPage);
