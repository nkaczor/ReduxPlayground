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
      <div className="todoItem">
        <header className="todoHeader">
          TASK {this.props.index+1}

          <a className="btn btn-danger btn-small" onClick={this.handleDelete.bind(this)}>Delete</a>
          <a className="btn btn-small" onClick={this.handleComplete.bind(this)}>Complete</a>
        </header>
        <article className="todoText">{todoData.get("text")} </article>
        <footer className="todoCompleted">Completed: {todoData.get("completed").toString()}</footer>

          </div>
    );
  }
}
TodoItem.propTypes = {
  todoData: PropTypes.instanceOf(Immutable.Map),
  index: PropTypes.number.isRequired
}
