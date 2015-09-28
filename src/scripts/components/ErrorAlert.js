import React, { Component, PropTypes } from 'react';
export default class ErrorAlert extends Component {

  render() {
    return (
      <div className="alert alert-error">
        {this.props.text}
      </div>
    );
  }
}
