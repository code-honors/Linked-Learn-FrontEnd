import Card from "react-bootstrap/Card";
import { If, Then, Else } from "react-if";
import Nav from "../nav/nav";
import { useSelector } from "react-redux";
import "./userCourses.scss";

function UserCourses(props) {
	let userCourses = [];

	// eslint-disable-next-line react-hooks/exhaustive-deps
	userCourses = [
		{
			title: "test test",
			image: "https://via.placeholder.com/200.png",
		},
		{
			title: "test course",
			image: "https://via.placeholder.com/200.png",
		},
		{
			title: "learn how not to code",
			image: "https://via.placeholder.com/200.png",
		},
		{
			title: "don't test",
			image: "https://via.placeholder.com/200.png",
		},
	];

	const state = useSelector((state) => {
		return {
			loggedIn: state.signIn.loggedIn,
		};
	});

	return (
		<main id="userAccountContainer">
			<If condition={state.loggedIn}>
				<Then>
					<>
						<Nav />
					</>
					<div className="userCoursesDiv">
						{userCourses.map((course) => {
							return (
								<Card style={{ width: "18rem" }}>
									<Card.Img
										variant="top"
										src={course.image}
										height="200"
										// width="100"
									/>
									<Card.Body>
										<Card.Title>{course.title}</Card.Title>
									</Card.Body>
									<Card.Body>
										<Card.Link href="#">
											View Details
										</Card.Link>
										<Card.Link href="#" className="remove">
											Remove
										</Card.Link>
									</Card.Body>
								</Card>
							);
						})}
					</div>
				</Then>
				<Else>Please Sign In</Else>
			</If>
		</main>
	);
}

export default UserCourses;
