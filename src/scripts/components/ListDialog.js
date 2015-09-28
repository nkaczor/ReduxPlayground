import React, { Component, PropTypes } from 'react';
export default class ListDialog extends Component {
  handleClick(reddit){
    this.props.onSelectFromList(reddit);
  }
  render() {
    var popularReddits=['frontend', 'polska', 'reactjs', 'running', 'tea']

    return (
      <div className="dlg">
      <h4>Select reddit</h4>
      {popularReddits.map(reddit =>
        <a onClick={e => this.handleClick(reddit) }>{reddit} </a>
      )}
     </div>

    );
  }
}
