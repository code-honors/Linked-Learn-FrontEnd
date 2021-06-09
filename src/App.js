import { useEffect } from "react";
import { checkCookies } from "./store/actions";
import cookie from "react-cookies";
import { useDispatch, useSelector } from "react-redux";
import Routes from "./routes";

function App(props) {

	const state = useSelector(state => {
		return {
			user:state.signIn.user,
			loggedIn: state.signIn.loggedIn
		}
	})
    // let history = useHistory();
	const dispatch = useDispatch();
	
    // console.log({props})    
	// console.log("====USER====", state.user);
	// console.log("====LOGGED IN====", state.loggedIn);
    // console.log('app.js',{state})
	useEffect(() => {
        const tokenAndUser = cookie.load("auth");
		// console.log('passed')
		// console.log(tokenAndUser);
		dispatch(checkCookies(tokenAndUser));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Routes />
		</>
	);
}

export default App;
