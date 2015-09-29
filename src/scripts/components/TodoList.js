import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import TodoItem from './TodoItem'
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import { DragDropContext } from 'react-dnd';



class TodoList extends Component {
  render() {
    var {list, onDelete, onComplete, onMove} = this.props
    return (
      <div className="todoList">
        {list.map((todoData, index) =>
          <TodoItem todoData={todoData} indexes={[index]} onDelete={onDelete} onComplete={onComplete} onMove={onMove}/>
        )}
      </div>
    );
  }
}

TodoList.propTypes = {
  list: PropTypes.instanceOf(Immutable.List)
}


export default DragDropContext(HTML5Backend)(TodoList);
