import React from 'react';
import { useSelector } from "react-redux";
import { If } from 'react-if'
// import { useEffect } from 'react';
function Acl(props) {
    let okToRender = false;

    const state = useSelector((state) => {
		return {
			user: state.signIn.user,
			loggedIn: state.signIn.loggedIn,
		};
	});

    try {
        okToRender = state.loggedIn && props.capability ? state.user.role === props.capability : false;
    } catch (error) {
        console.log('NOT AUTHORIZED', error.message)
    }

    return (
        <If condition={okToRender}>
            {props.children}
        </If>
    )
}

export default Acl;