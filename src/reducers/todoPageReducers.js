import Immutable, {List as IList} from 'immutable';
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, SET_VISIBILITY_FILTER } from '../actions/actions';
import VisibilityFilters from '../constants/VisibilityFilters'
const { SHOW_ALL } = VisibilityFilters;


export function todoPage(state, action){
  state = state.set('todos', todos(state.get('todos'), action));
  state = state.set('visibilityFilter', visibilityFilter(state.get('visibilityFilter'), action));

  return state;

}

export function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    console.log(action.filter);
    return action.filter;
    break;
  default:
    return state;
  }
}

export function todos(state = IList(), action) {
  switch (action.type) {
  case DELETE_TODO:
    console.log(state);
    state = state.delete(action.index);
    console.log(state);
    break;
  case ADD_TODO:
   state = state.push(Immutable.fromJS({
      text: action.text,
      completed: false
    }));
    break;
  case COMPLETE_TODO:
    state = state.update(action.index, item => item.set('completed', true));
    break;
  }
  return state;
}
