import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import {useDispatch} from 'react-redux';
import {checkCookies} from './actions'
import { TrafficOutlined } from '@material-ui/icons';

let initialState = {
	user: {},
	loggedIn: false,
};

const signIn = (state, action) => {
	// let dispatch = useDispatch();
	state = initialState;
	const { type, payload } = action;
	// let user = {},
	// 	loggedIn;
	const tokenAndUser = cookie.load("auth");
	// console.log('passed')
	// console.log(tokenAndUser);
try{
	const user = jwt.verify(
		tokenAndUser.token,
		"ePzscxrRn7toGZ1Hrh4OICHV"
	);

	state = {
		user: user,
		loggedIn: true,
	};

}catch(err){

}

	cookie.save("auth", tokenAndUser, {path:'/'});
	switch (type) {
		case "SIGN-IN":
            // console.log(9999999,{payload})
			// user = payload;
			// loggedIn = true;
			return { user: payload, loggedIn: true };

		case "SIGN-OUT":
			// console.log(1)
			return { user: {}, loggedIn: false };

		default:
			return state;
	}
};

export default signIn;
