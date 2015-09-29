import 'babel-core/polyfill';

import React from 'react';
import {IndexRoute, Route, Router} from 'react-router'
import { Provider } from 'react-redux';
import Immutable, {List as IList, Map as IMap} from 'immutable';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import configureStore from './store/configureStore';

import App from './containers/App';
import ApiPage from './containers/ApiPage';
import ApiPageAll from './containers/ApiPage/ApiPageAll';
import ApiPageSingle from './containers/ApiPage/ApiPageSingle';
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
const history = createBrowserHistory();

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history} >
        <Route component={App} path="/">
          <IndexRoute component={TodoPage} />
          <Route path="api" component={ApiPage} >
            <IndexRoute component={ApiPageAll} />
            <Route path="thread/:id" component={ApiPageSingle} />
          </Route>
        </Route>
      </Router>
    }
  </Provider>,
  document.getElementById('root')
);
