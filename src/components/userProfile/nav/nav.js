import { NavLink, useRouteMatch } from "react-router-dom";
import './nav.scss';

function Nav() {
	let { url } = useRouteMatch();
	return (
		<div className='userNavDiv'>
			<ul>
				<li>
					<NavLink exact to={`${url}profile`}>
						<span>Profile</span> 
					</NavLink>
				</li>
				<li>
					<NavLink exact to={`${url}profile/update`}>		
						<span>Update Info</span>
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
		</div>
	);
}

export default Nav;