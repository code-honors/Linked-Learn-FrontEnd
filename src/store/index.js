import courses from './courses';

import { createStore, combineReducers, applyMiddleware } from "redux";
import auth from './signIn';
import thunk from "redux-thunk";

let reducers = combineReducers({ signIn: auth, courses });

const store = () => {
	return createStore(reducers, applyMiddleware(thunk));
};

export default store();