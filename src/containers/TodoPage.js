import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddTodoInput from '../components/AddTodoInput'
import TodoList from '../components/TodoList'
import FiltersList from '../components/FiltersList'
import * as TodoActions from '../actions/actions';
import VisibilityFilters from '../constants/VisibilityFilters';

const {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} = VisibilityFilters;

class TodoPage extends Component {

  render() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return (
      <header>
        <h1>Hello, world.</h1>
        <AddTodoInput onSave={actions.addTodo} placeholder="Input something"/>
        <TodoList list={this.props.visibleTodos}
                  onDelete={actions.deleteTodo}
                  onComplete={actions.completeTodo}/>
        <FiltersList onChange={actions.setVisibilityFilter}/>

      </header>
    );
  }
}

function selectTodos(todos, filter){
  switch(filter){
  case SHOW_ACTIVE:
    return todos.filter(x => !x.get("completed"));
    break;
  case SHOW_COMPLETED:
    return todos.filter(x => x.get("completed"));
    break;
  default:
    return todos;
  }
}
function select(state) {
  return {
    visibleTodos: selectTodos(state.get("todos"), state.get("visibilityFilter")),
    visibilityFilter: state.get("visibilityFilter")
  };
}
export default connect(select)(TodoPage);
