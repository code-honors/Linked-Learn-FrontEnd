import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./userCourses.scss";

function UserCourses(props) {
	let userCourses = [];
	
		// eslint-disable-next-line react-hooks/exhaustive-deps
		userCourses = [
			{
				title: "test test",
				image: "https://via.placeholder.com/100.png",
			},
			{
				title: "test course",
				image: "https://via.placeholder.com/100.png",
			},
			{
				title: "learn how not to code",
				image: "https://via.placeholder.com/100.png",
			},
			{
				title: "don't test",
				image: "https://via.placeholder.com/100.png",
			},
		];
	

	return (
		<div id="userCoursesDiv">
			{userCourses.map((course) => {
                return (
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant="top"
						width="100"
						height="200"
						src={course.image}
					/>
					<Card.Body>
						<Card.Title>{course.title}</Card.Title>
						<Button variant="primary">View Details</Button>
					</Card.Body>
				</Card>
                )
			})}
		</div>
	);
}

export default UserCourses;