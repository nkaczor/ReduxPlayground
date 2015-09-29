import Immutable, {
  List as IList
}
from 'immutable';
import {
  ADD_TODO, COMPLETE_TODO, DELETE_TODO, MOVE_TODOS, SET_VISIBILITY_FILTER
}
from '../actions/todoActions';
import VisibilityFilters from '../constants/VisibilityFilters'
const {
  SHOW_ALL
} = VisibilityFilters;


export function todoPage(state, action) {
  state = state.set('todos', todos(state.get('todos'), action));
  state = state.set('visibilityFilter', visibilityFilter(state.get('visibilityFilter'), action));

  return state;

}

export function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
      break;
    default:
      return state;
  }
}

function createPathToObject(indexes) {
  indexes = indexes.slice();
  let length = indexes.length;
  for (let i = 0; i < length - 1; i++)
    indexes.splice(i * 2 + 1, 0, 'children');
  return indexes;
}

function IsFirstPathParent(firstPath, secondPath) {
  if (firstPath.length > secondPath.length)
    return false;
  for (let i = 0; i < firstPath.length; i++)
    if (firstPath[i] !== secondPath[i]) return false;
  return true;
}
function updateParentWithChildren(state,parentPath, func){
  state = state.updateIn(parentPath, func);
  let numberOfChildren=state.getIn([...parentPath, 'children']).size;
  for(let i=0; i<numberOfChildren; i++)
      state=updateParentWithChildren(state, [...parentPath, 'children', i], func)
  return state;
}

export function todos(state = IList(), action) {
  let indexes;
  switch (action.type) {
    case DELETE_TODO:
      indexes = createPathToObject(action.indexes);
      state = state.deleteIn(indexes);
      break;

    case ADD_TODO:
      state = state.push(Immutable.fromJS({
        text: action.text,
        completed: false,
        children: []
      }));
      break;

    case MOVE_TODOS:
      let fromIndexes = createPathToObject(action.fromIndexes);
      let toIndexes = createPathToObject(action.toIndexes);
      console.log(fromIndexes + " /" + toIndexes+ " : ");
      if(!IsFirstPathParent(fromIndexes, toIndexes)){
        toIndexes[toIndexes.length] = 'children';
        let elements = state.getIn(fromIndexes);
        state = state.deleteIn(fromIndexes);
        state = state.updateIn(toIndexes, array => array.push(elements));
      }
      break;

    case COMPLETE_TODO:
      indexes=createPathToObject(action.indexes)
      state = updateParentWithChildren(state, indexes, item=>item.set("completed", true));
      break;
  }
  return state;
}
