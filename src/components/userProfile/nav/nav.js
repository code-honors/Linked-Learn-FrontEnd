import { NavLink } from "react-router-dom";
import ACL from "../../acl/acl";
import "./nav.scss";

function Nav() {
	return (
		<div className="userNavDiv">
			<ul>
				<li>
					<NavLink exact to={`/user/profile`}>
						<span>Profile</span>
					</NavLink>
				</li>
				<li>
					<NavLink exact to={`/user/update`}>
						<span>Update Info</span>
					</NavLink>
				</li>
				<li>
					<NavLink exact to={`/user/courses`}>
						<span>Courses</span>
					</NavLink>
				</li>
				{/* <li>
					<NavLink exact to={`/user/events`}>
						<span>Events</span>
					</NavLink>
				</li> */}
				<ACL capability="teacher">
					<li>
						<NavLink exact to={`/user/add-course`}>
							<span>Add Course</span>
						</NavLink>
					</li>
				</ACL>
			</ul>
		</div>
	);
}

export default Nav;
