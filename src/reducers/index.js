import {todoPage} from './todoPageReducers';
import {apiPage} from './apiPageReducers'
import { Map as IMap} from 'immutable';

export default function rootReducer(state = IMap(), action) {

  state = state.set('todoPage', todoPage(state.get('todoPage'), action));
  state = state.set('apiPage', apiPage(state.get('apiPage'), action));

  return state;

}
