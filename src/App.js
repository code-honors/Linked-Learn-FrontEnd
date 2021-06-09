import { useEffect } from "react";
import { checkCookies } from "./store/actions";
import cookie from "react-cookies";
import { useDispatch } from "react-redux";
import Routes from "./routes";

function App(props) {
	const dispatch = useDispatch();
	
	useEffect(() => {
        const tokenAndUser = cookie.load("auth");
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
