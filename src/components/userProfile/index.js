import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import { If, Then, Else } from "react-if";
import { useSelector } from "react-redux";
import Nav from "./nav/nav";
// import UserProfile from "./userProfile/userProfile";
// import UserUpdateInfo from "./updateProfile/updateProfile";
// import UserCourses from "./userCourses/userCourses";
// import UserEvents from "./userEvents/userEvents";
// import AddCourse from "./addCourse/addCourse";
import "./index.scss";

function UserPage(props) {
	const state = useSelector((state) => {
		return {
			loggedIn: state.signIn.loggedIn,
		};
	});

	// const { path } = useRouteMatch();
	// console.log({path})
	return (
		<main id="userAccountContainer">
			<If condition={state.loggedIn}>
				<Then>
					<>
						<Nav />
					</>
					{/* <Switch>
						<Route
							exact
							path={`/user/profile`}
							component={UserProfile}
						/>
						<Route
							exact
							path={`/user/update`}
							component={UserUpdateInfo}
						/>
						<Route
							exact
							path={`/user/courses`}
							component={UserCourses}
						/>
						<Route
							exact
							path={`/user/events`}
							component={UserEvents}
						/>
						<Route
							exact
							path={`/user/add-course`}
							component={AddCourse}
						/>
					</Switch> */}
				</Then>
				<Else>
                    Please Sign In
                </Else>
			</If>
		</main>
	);
}

export default UserPage;
