import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddTodoInput from '../components/AddTodoInput'
import TodoList from '../components/TodoList'
import FiltersList from '../components/FiltersList'
import * as TodoActions from '../actions/todoActions';
import VisibilityFilters from '../constants/VisibilityFilters';

const {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} = VisibilityFilters;

class TodoPage extends Component {

  render() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return (
      <section className="todoPage">
        <h1>Todo List</h1>
        <AddTodoInput onSave={actions.addTodo} placeholder="Input something"/>
        <FiltersList onChange={actions.setVisibilityFilter}
        selectedFilter={this.props.visibilityFilter}/>
        <TodoList list={this.props.visibleTodos}
                  onDelete={actions.deleteTodo}
                  onComplete={actions.completeTodo}/>


      </section>
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
  state=state.get("todoPage");
  return {
    visibleTodos: selectTodos(state.get("todos"), state.get("visibilityFilter")),
    visibilityFilter: state.get("visibilityFilter")
  };
}
export default connect(select)(TodoPage);
