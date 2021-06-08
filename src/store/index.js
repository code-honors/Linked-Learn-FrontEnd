import courses from './courses';
import teachers from './teachers';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let reducers = combineReducers({ courses,teachers });

const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();
