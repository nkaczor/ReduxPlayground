

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const MOVE_TODOS = 'MOVE_TODOS';

export function addTodo(text) {
  return { type: ADD_TODO, text };
}
export function moveTodos(fromIndexes, toIndexes) {
  return { type: MOVE_TODOS, fromIndexes,toIndexes };
}

export function deleteTodo(indexes) {
  return { type: DELETE_TODO, indexes };
}

export function completeTodo(indexes) {
  return { type: COMPLETE_TODO, indexes };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
