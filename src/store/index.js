import courses from './courses';
import teachers from './teachers';

import { createStore, combineReducers, applyMiddleware } from "redux";
import singInReducer from './signIn';
import thunk from "redux-thunk";

let reducers = combineReducers({ courses,teachers,singInReducer });

const store = () => {
	return createStore(reducers, applyMiddleware(thunk));
};

export default store();