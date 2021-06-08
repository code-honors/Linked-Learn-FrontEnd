import superagent from "superagent";
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const api = 'https://linked-learn.herokuapp.com'

export const signUpAuth = (username, email, password, role) => {
    // console.log(1)
    return async (dispatch) => {
        try {
            const response = await superagent.post(`${api}/auth/signup`).send({username, email, password, role});
            const {user, token} = response.body;
            cookie.save('auth', token);
            dispatch(signIn(user));            
        } catch (error) {
            console.error(error);
        }
    }
}

export const checkCookies = (token) => {
    return (dispatch) => {
        try {
            console.log(1,token)
            const user = jwt.verify(token, 'ePzscxrRn7toGZ1Hrh4OICHV');
            cookie.save('auth', token);
            dispatch(signIn(user));
        } catch (error) {
            console.log('validation error', error);
        }
    }
}

export const signInAuth = (username, password) => {
    return (dispatch) => {
        setLogin();

        const validateToken = (token) => {
            try {
                const user = jwt.verify(token, 'ePzscxrRn7toGZ1Hrh4OICHV');
                cookie.save('auth', token);
                dispatch(signIn(user))
                // login(true, token, user);
            } catch (error) {
                // login(false, null, {});
                console.log('validation error', error);
            }
        }

        async function setLogin() {
            try {
                const response = await superagent.post(`${api}/auth/signin`).set('authorization', 'basic ' + new Buffer.from(`${username}:${password}`, 'utf8').toString('base64'));
                console.log(response.body);
                validateToken(response.body.token);
            } catch (error) {
                console.error('Login error', error);
            }
        }
    }
}

const signIn = (user) => {
    return {
        type: "SIGN-IN",
        payload: user
    }
}

const signOut = user => {
    return {
        type: "SIGN-UP",
        payload: user
    }
}