let initialState = {
	user: {},
	loggedIn: false,
};

const signIn = (state, action) => {
	state = initialState;
	const { type, payload } = action;
	// let user = {},
	// 	loggedIn;

	switch (type) {
		case "SIGN-IN":
            console.log({payload})
			// user = payload;
			// loggedIn = true;
			return { user: payload, loggedIn: true };

		case "SIGN-OUT":
			return { user: {}, loggedIn: false };

		default:
			return state;
	}
};

export default signIn;
