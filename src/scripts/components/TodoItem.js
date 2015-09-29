import React, { PropTypes, Component } from 'react';
import Immutable from 'immutable';
import { DragSource, DropTarget } from 'react-dnd';

/**
 * Implements the drag source contract.
 */

var itemTarget = {
  drop: function (props, monitor, component) {
    const hasDroppedOnChild = monitor.didDrop();
    if (hasDroppedOnChild)
     return;
    const ownIndexes = props.indexes;
    const draggedIndexes = monitor.getItem().indexes;
    props.onMove(draggedIndexes, ownIndexes);
}
};

const itemSource = {

  beginDrag(props) {
    return {
      indexes: props.indexes
    };
  }
};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true })
  };
}



class TodoItem extends Component {
  handleDelete() {
    this.props.onDelete(this.props.indexes);
  }
  handleComplete(){
    this.props.onComplete(this.props.indexes);
  }
  render() {
    const {todoData, onDelete, onComplete,onMove, indexes} = this.props;
    const classes = indexes.length % 2 ? "todoItem todoItemOdd" : "todoItem";
    const typeOfTask=indexes.length==1 ? 'TASK' : 'SUBTASK';
    return this.props.connectDragSource(this.props.connectDropTarget(
      <div className={classes}>
        <header className="todoHeader">
          {typeOfTask} {indexes[indexes.length-1]+1}

          <a className="btn btn-danger btn-small" onClick={this.handleDelete.bind(this)}>Delete</a>
          <a className="btn btn-small" onClick={this.handleComplete.bind(this)}>Complete</a>
        </header>
        <article className="todoText">{todoData.get('text')} </article>
        <footer className="todoCompleted">Completed: {todoData.get("completed").toString()}</footer>
        <div>
          {todoData.get('children').map((todoItem, index) =>

          <StatefulTodoItem todoData={todoItem}
                            indexes={[...indexes,index]}
                            onDelete={onDelete}
                            onComplete={onComplete}
                            onMove={onMove}/>
          )}
        </div>



          </div>
    ));
  }
}
TodoItem.propTypes = {
  todoData: PropTypes.instanceOf(Immutable.Map),
  index: PropTypes.number.isRequired
}
TodoItem = DropTarget("ITEM", itemTarget, collectTarget)(DragSource("ITEM", itemSource, collectSource)(TodoItem));


export default class StatefulTodoItem extends Component {


  render() {
    return (
      <TodoItem {...this.props} />
    );
  }


}
