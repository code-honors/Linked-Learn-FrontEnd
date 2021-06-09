import superagent from "superagent";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";

const api = "https://linked-learn.herokuapp.com";

export const signUpAuth = (username, email, password, role) => {
	return async (dispatch) => {
		try {
			const response = await superagent
				.post(`${api}/auth/signup`)
				.send({ username, email, password, role });
			const { user, token } = response.body;
			cookie.save("auth", token, { path: '/' });
			dispatch(signIn(user));
		} catch (error) {
			console.error(error);
		}
	};
};

export const getRemoteData = function (api, data) {
	return (dispatch) => {
		return superagent
			.get(api)
			.then((res) => {
				// eslint-disable-next-line default-case
				switch (data) {
					case "courses":
						dispatch(getCourses({ courses: res.body }));
						break;
					case "teachers":
						dispatch(getTeachers({ teachers: res.body }));
						break;
					case "tProfile":
						dispatch(getProfile({ profile: res.body }));
						break;
					case "tCourses":
						dispatch(getTeacherCourses({ tCourses: res.body }));
						break;
				}
			})
			.catch((e) => console.error(e.message));
	};
};

export const getCourses = ({ courses }) => {
	return {
		type: "GET_C",
		payload: courses,
	};
};

export const checkCookies = (tokenAndUser) => {
	return (dispatch) => {
		try {
			const user = jwt.verify(
				tokenAndUser.token,
				"ePzscxrRn7toGZ1Hrh4OICHV"
			);

			cookie.save("auth", tokenAndUser, {path:'/'});
			dispatch(signIn(tokenAndUser.user));
		} catch (error) {
			console.error("validation error", error);
		}
	};
};

export const signInAuth = (username, password) => {
	return (dispatch) => {
		setLogin();
		const validateToken = (response) => {
			try {
				const user = jwt.verify(
					response.token,
					"ePzscxrRn7toGZ1Hrh4OICHV"
				);
				//cookie.save('token', token, { path: '/' });
				cookie.save("auth", response, { path: "/" });
				// cookie.save('user', responseUser);
				dispatch(signIn(response.user));
			} catch (error) {
				console.error("validation error", error);
			}
		};

		async function setLogin() {
			try {
				const response = await superagent
					.post(`${api}/auth/signin`)
					.set(
						"authorization",
						"basic " +
							new Buffer.from(
								`${username}:${password}`,
								"utf8"
							).toString("base64")
					);

				validateToken(response.body);
			} catch (error) {
				console.error("Login error", error);
			}
		}
	};
};

export const removeCookie = () => {
	return (dispatch) => {
		cookie.save("auth", null, { path: "/" });
		if (cookie.load("auth")) dispatch(signOut());
	};
};

export const signOut = () => {
	// cookie.remove('auth');
	return {
		type: "SIGN-OUT",
		payload: null,
	};
};

export const getTeacherCourses = ({ tCourses }) => {
	return {
		type: "GET_TC",
		payload: tCourses,
	};
};

export const getTeachers = ({ teachers }) => {
	return {
		type: "GET_T",
		payload: teachers,
	};
};

export const getProfile = ({ profile }) => {
	return {
		type: "GET_P",
		payload: profile,
	};
};

export const filter = (category) => {
	return {
		type: "FILTER",
		payload: category,
	};
};

const signIn = (user) => {
	return {
		type: "SIGN-IN",
		payload: user,
	};
};
