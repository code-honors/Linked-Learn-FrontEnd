import { useSelector, useDispatch } from "react-redux";
import {checkCookies} from "../../../store/actions";
import cookie from 'react-cookies';
import {useEffect} from 'react';
import { If, Then, Else } from "react-if";
import Nav from "../nav/nav";
import "./userProfile.scss";

function UserProfile(props) {
    let dispatch = useDispatch();
	const state = useSelector((state) => {
		return {
			user: state.signIn.user,
            loggedIn: state.signIn.loggedIn
		};
	});
    console.log({state});
    useEffect(() => {
        const tokenAndUser = cookie.load("auth");
		console.log('passed')
		// console.log(tokenAndUser);
		dispatch(checkCookies(tokenAndUser));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// console.log('user',state.user);
    // console.log('logged in',state.loggedIn);

	return (
		<main id="userAccountContainer">
			<If condition={state.loggedIn}>
				<Then>
					<>
						<Nav />
					</>
					<div className="userProfileContainer">
						<ul>
							<li>
								<img
									src="https://freepikpsd.com/media/2019/10/default-profile-picture-png-1-Transparent-Images.png"
									width="150px"
									height="150px"
									alt="profile_picture"
								/>
							</li>
							<li>
								<strong>Username:</strong>{" "}
								<span>{state.user.username}</span>
							</li>
							<li>
								<strong>Email:</strong>{" "}
								<span>{state.user.email}</span>
							</li>
							<li>
								<strong>Role:</strong>{" "}
								<span>{state.user.role}</span>
							</li>
						</ul>
					</div>
				</Then>
				<Else>Please Sign In</Else>
			</If>
		</main>
	);
}

export default UserProfile;
