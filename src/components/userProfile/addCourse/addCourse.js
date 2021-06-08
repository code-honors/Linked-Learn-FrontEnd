import Form from "react-bootstrap/Form";
import {If, Then, Else} from 'react-if';
import Nav from '../nav/nav';
import {useSelector} from 'react-redux';
import Button from "react-bootstrap/Button";
import "./addCourse.scss";

function AddCourse() {

    const handleSubmitAddCourse = (event) => {
        event.preventDefault();
		let name = event.target.name.value;
		let img = event.target.img.value;
		let category = event.target.category.value;
		let classes = event.target.classes.value;
    }

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
        <div className="addCourseFormDiv">
			<Form
				id="addCourseFrom"
				onSubmit={(event) => handleSubmitAddCourse(event)}
			>
				<Form.Group>
					<Form.Control
						type="text"
						name="name"
						placeholder="Course Name"
						required
					/>
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Control
						type="text"
						name="img"
						placeholder="Image URL"
						required
					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Control
						name="category"
						type="text"
						placeholder="Category"
						required
					/>
                </Form.Group>
				<Form.Group controlId="formGridState">
					<Form.Control name="classes" type="text" placeholder="Classes URL"/>					
				</Form.Group>
                <Form.Group>
					<Form.Control
						// style={{ textAlign: "left" }}
						id="courseDescription"
                        name="description"
                        placeholder="Course Description"
						as="textarea" rows={3}
					/>
                </Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
		</Then>
				<Else>
                    Please Sign In
                </Else>
			</If>
		</main>
    )
}

export default AddCourse;