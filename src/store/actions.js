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
			cookie.save("auth", token);
			dispatch(signIn(user));
		} catch (error) {
			console.error(error);
		}
	};
};

export const getRemoteData = function (api , data) {
	console.log('step 2: actions first', api);
	return (dispatch) => {
		console.log('step 3: actions second', dispatch);
		return superagent
		.get(api)
		.then((res) => {
			console.log('step 4: actions third', res.body);
			// eslint-disable-next-line default-case
			switch(data){
				case 'courses':
					dispatch(getCourses({ courses: res.body }));
					break;
					case 'teachers':
						dispatch(getTeachers({ teachers: res.body }));
						break;
						case 'tProfile':
							dispatch(getProfile({ profile: res.body }));
							break;
							case 'tCourses':
								dispatch(getTeacherCourses({ tCourses: res.body }));
								break;
								
							}
						})
						.catch((e) => console.error(e.message));
					};
				};
				
				export const getCourses = ({ courses }) => {
					console.log('step 5: courses action', courses);
					return {
						type: 'GET_C',
						payload: courses,
					};
				};
				
				export const checkCookies = (tokenAndUser) => {
					return (dispatch) => {
						try {
							const user = jwt.verify(tokenAndUser.token, "ePzscxrRn7toGZ1Hrh4OICHV");
							console.log('check')
							cookie.save("auth", tokenAndUser);
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
                // console.log({responseUser})
				const user = jwt.verify(response.token, "ePzscxrRn7toGZ1Hrh4OICHV");
				console.log('sign in')
				cookie.save("auth", response);
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
                                console.log( 'response.body.user', response.body)
				validateToken(response.body);
			} catch (error) {
				console.error("Login error", error);
			}
		}
	};
};

export const removeCookie = () => {
	return(dispatch) => {
		console.log(1);
		cookie.save('auth', null);
		if(cookie.load('auth')) console.log(2)
		dispatch(signOut())
	}
}

export const signOut = () => {
    // cookie.remove('auth');
	return {
		type: "SIGN-OUT",
		payload: null,
	};
}
  
export const getTeacherCourses = ({ tCourses }) => {
  console.log('step 5: courses action', tCourses);
  return {
    type: 'GET_TC',
    payload: tCourses,
  };
};

export const getTeachers = ({ teachers }) => {
  console.log('step 5: teachers action', teachers);
  return {
    type: 'GET_T',
    payload: teachers,
  };
};

export const getProfile = ({ profile }) => {
  console.log('step 5: profile action', profile);
  return {
    type: 'GET_P',
    payload: profile,
  };
};

export const filter = (category) => {
  return {
    type: 'FILTER',
    payload: category,
  };
};

const signIn = (user) => {
    return {
        type: "SIGN-IN",
        payload: user,
    };
};
