import fetch from 'isomorphic-fetch';
/*
 * action types
 */

export const SELECT_REDDIT = 'SELECT_REDDIT';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message.

/*
 * other constants
 */


/*
 * action creators
 */
export function selectReddit(reddit){
  return {type: SELECT_REDDIT, reddit}
}

export function requestPosts(user){
  return {type: FETCH_POSTS_REQUEST, user};
}

export function receivePosts(json){
 return {type: FETCH_POSTS_SUCCESS, posts: json.data.children.map(child => child.data)};
}

export function receiveError(error){
  return {type: FETCH_POSTS_FAILURE, error }
}

export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  };
}

export function fetchPosts(reddit) {

  return function (dispatch) {

    dispatch(requestPosts(reddit));

    return fetch(`http://www.reddit.com/r/${reddit}.json`)

      .then(response => response.json())
      .then(json =>
        { dispatch(resetErrorMessage());
          dispatch(receivePosts(json));}
      )
      .catch(err => dispatch(receiveError(err.message)));
  };
}
