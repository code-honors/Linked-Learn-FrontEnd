import { useEffect } from "react";
import { checkCookies } from "./store/actions";
import cookie from "react-cookies";
import { useDispatch } from "react-redux";
import Routes from "./routes";

function App(props) {
    // let history = useHistory();
	const dispatch = useDispatch();

	const initialCookiesCheck = () => {
		const tokenAndUser = cookie.load("auth");
		console.log(tokenAndUser);
		dispatch(checkCookies(tokenAndUser));
	};
    
	
    // console.log({props})
    
    
	// console.log("====USER====", state.user);
	// console.log("====LOGGED IN====", state.loggedIn);
    
	useEffect(() => {
        initialCookiesCheck();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Routes />
		</>
	);
}

export default App;
