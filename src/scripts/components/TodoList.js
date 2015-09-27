import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import TodoItem from './TodoItem'
export default class TodoList extends Component {
  render() {
    var {list, onDelete, onComplete} = this.props
    return (
      <div>
        {list.map((todoData, index) =>
          <TodoItem todoData={todoData} index={index} onDelete={onDelete} onComplete={onComplete}/>
        )}
      </div>
    );
  }
}

TodoList.propTypes = {
  list: PropTypes.instanceOf(Immutable.List)
}
