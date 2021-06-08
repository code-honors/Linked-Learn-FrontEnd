import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import SignInAndUp from "../components/sign/index";
import UserPage from "../components/userProfile/index";
import NotFound from "../components/NotFound";
import Home from "../components/home/home";
import AboutUs from "../components/aboutUs/aboutus.js";

export default function Routes() {
	const { url } = useRouteMatch();

	return (
		<>
			{/* <div>
				<ul>
					<li>
						<NavLink exact to={`profile/`}>
							<span>Profile</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to={`sign-in-up/`}>
							<span>Sign In</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to={`${url}profile/courses`}>
							<span>Courses</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to={`${url}profile/events`}>
							<span>Events</span>
						</NavLink>
					</li>
				</ul>
			</div> */}
            <SignInAndUp/>
            {/* <UserPage/> */}

			{/* <Switch>
				<Route exact path="/sign-in-up" component={SignInAndUp} />
				<Route exact path="/" component={Home} />
				<Route exact path="/aboutus" component={AboutUs} />
				<Route component={NotFound} />
			</Switch> */}
		</>
	);
}
// import UserPage from '../components/userProfile/index';

// export default function Routes() {
//   return (
//     // <Switch>
//     //   <Route exact path="/student" component={UserPage} />
//     //   {/* <Route component={NotFound} /> */}
//     // </Switch>
//   );
// }
