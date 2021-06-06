import courses from './courses';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let reducers = combineReducers({ courses });

const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();
