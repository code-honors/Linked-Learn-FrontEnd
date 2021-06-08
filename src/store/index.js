import courses from './courses';

import { createStore, combineReducers, applyMiddleware } from "redux";
import singInReducer from './signIn';
import thunk from "redux-thunk";

let reducers = combineReducers({ signIn: singInReducer, courses });

const store = () => {
	return createStore(reducers, applyMiddleware(thunk));
};

export default store();