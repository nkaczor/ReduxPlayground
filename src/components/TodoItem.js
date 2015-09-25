import React, { PropTypes, Component } from 'react';
import Immutable from 'immutable';

export default class TodoItem extends Component {
  handleDelete() {
    this.props.onDelete(this.props.index);

  }
  handleComplete(){
    this.props.onComplete(this.props.index);
  }
  render() {
    var {todoData} = this.props;
    return (
      <div>
        {todoData.get("text") + " " + todoData.get("completed") }
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
        <button onClick={this.handleComplete.bind(this)}>Complete</button>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todoData: PropTypes.instanceOf(Immutable.Map),
  index: PropTypes.number.isRequired
}
