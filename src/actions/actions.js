import fetch from 'isomorphic-fetch';
/*
 * action types
 */


export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
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
 return {type: FETCH_POSTS_SUCCESS, posts: json};
}

export function receiveError(error){
  return {type: FETCH_POSTS_FAILURE, error }
}

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function deleteTodo(index) {
  return { type: DELETE_TODO, index };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}



export function fetchPosts(reddit) {

  return function (dispatch) {

    dispatch(requestPosts(reddit));

    return fetch(`http://www.reddit.com/r/${reddit}.json`)
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(json))
      );
  };
}
