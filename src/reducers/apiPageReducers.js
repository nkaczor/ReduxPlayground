import Immutable, {List as IList} from 'immutable';
import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_TWEETS_SUCCESS, ELECT_REDDIT } from '../actions/actions';



export function apiPage(state, action){
  switch(action.type){
    case SELECT_USER:
      state.set("selectedReddit", action.reddit);
      break;
    case FETCH_POSTS_REQUEST:
      state.set("isFetching", true);
      break;
    case FETCH_POSTS_FAILURE:
      state.set("isFetching", false);
      break;
    case FETCH_POS:
      state.set("isFetching", false);
      break;
  }
  return state;
}
