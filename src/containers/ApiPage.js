import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class ApiPage extends Component {

  render() {
    return (
      <header>

      <input
       type="text"
       autoFocus="true"
       value={this.state.text}
       onChange={this.handleChange.bind(this)}
       onKeyDown={this.handleSubmit.bind(this)} />
      </header>
    );
  }
}


export default ApiPage;
