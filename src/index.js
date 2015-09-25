import React from 'react';
import Router, {DefaultRoute, Route} from 'react-router'
import { Provider } from 'react-redux';
import Immutable, {List as IList, Map as IMap} from 'immutable';
import configureStore from './store/configureStore';

import App from './containers/App';
import ApiPage from './containers/ApiPage'
import TodoPage from './containers/TodoPage';

import { addTodo, completeTodo, setVisibilityFilter } from './actions/actions';
import VisibilityFilters from './constants/VisibilityFilters';
const { SHOW_ALL } = VisibilityFilters;

let initialState = IMap({
  todoPage: {
  todos: IList(),
  visibilityFilter: SHOW_ALL},
  apiPage:{}
});


const store = configureStore(initialState);


var routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute handler={TodoPage} />
    <Route name="api" handler={ApiPage} />
  </Route>
);

Router.run(routes, function (Root) {
  React.render(
    <Provider store={store}>
      {() => <Root />}
    </Provider>,
    document.getElementById('root')
  );
});
