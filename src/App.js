import { useEffect } from "react";
import { checkCookies } from "./store/actions";
import cookie from "react-cookies";
import { useDispatch } from "react-redux";

import Routes from "./routes";


function App() {
	const dispatch = useDispatch();

	const initialCookiesCheck = () => {
		const token = cookie.load("auth");
		console.log(token);
		dispatch(checkCookies(token));
	};

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
