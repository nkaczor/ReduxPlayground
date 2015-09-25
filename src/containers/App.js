import React, { Component } from 'react';
import Router, {RouteHandler, Link} from 'react-router';

export default class App extends Component {

  render() {
    return (
      <div>
      <Link to={'/api'}>About</Link>
      <Link to={'/'}>Todo</Link>
        <RouteHandler/>
      </div>
    );
  }
}
