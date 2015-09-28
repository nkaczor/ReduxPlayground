import 'babel-core/polyfill';

import React from 'react';
import Router, {DefaultRoute, Route} from 'react-router'
import { Provider } from 'react-redux';
import Immutable, {List as IList, Map as IMap} from 'immutable';
import configureStore from './store/configureStore';

import App from './containers/App';
import ApiPage from './containers/ApiPage'
import TodoPage from './containers/TodoPage';

import VisibilityFilters from './constants/VisibilityFilters';
const { SHOW_ALL } = VisibilityFilters;

require('../styles/main.scss');


let initialState = IMap({
  todoPage: IMap({
    todos: IList(),
    visibilityFilter: SHOW_ALL}),
  apiPage:IMap({
    errorMessage: '',
    selectedReddit: '',
    isFetching: false,
    posts: IList()
  })
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
