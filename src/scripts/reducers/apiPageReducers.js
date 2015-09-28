import Immutable, {List as IList} from 'immutable';
import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, SELECT_REDDIT,RESET_ERROR_MESSAGE } from '../actions/apiActions';



export function apiPage(state, action){
  switch(action.type){
    case SELECT_REDDIT:
      state=state.set("selectedReddit", action.reddit);
      break;
    case FETCH_POSTS_REQUEST:
      state=state.set("isFetching", true);
      break;
    case FETCH_POSTS_FAILURE:
      state=state.set("isFetching", false);
      state=state.set("errorMessage", action.error)
      break;
    case FETCH_POSTS_SUCCESS:
      state=state.set("isFetching", false);
      console.log(action.posts)
      state=state.set("posts", Immutable.fromJS(action.posts));
      break;
    case RESET_ERROR_MESSAGE:
      state=state.set("errorMessage", '');
      break;
  }
  return state;
}
