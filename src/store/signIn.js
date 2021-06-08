let initialState ={
    user:{},
    loggedIn:false,
}

const signIn = (state, action) => {
    state = initialState;
    const { type, payload} = action;
    let user = {},
        loggedIn;

    switch(type) {
        case "SIGN-IN":
            user = payload;
            loggedIn = true;
            return { user, loggedIn };

        case "SIGN-OUT":
            return initialState;

        default:
            return state;
    }
}

export default signIn;