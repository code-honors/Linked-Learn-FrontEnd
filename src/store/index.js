import courses from "./courses";
import teachers from "./teachers";
import profile from "./profile";
import { createStore, combineReducers, applyMiddleware } from "redux";
import auth from "./signIn";
import thunk from "redux-thunk";

let reducers = combineReducers({ courses, teachers, signIn: auth, profile });
const store = () => {
	return createStore(reducers, applyMiddleware(thunk));
};

export default store();
