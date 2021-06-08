import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAuth } from "../../store/actions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function SignUpForm() {
	const dispatch = useDispatch();

	const handleShowPassword = () => {
		let type = document.querySelector(".password").type;
		type === "password"
			? (document.querySelector(".password").type = "text")
			: (document.querySelector(".password").type = "password");
	};

	// const state = useSelector((state) => {
	// 	return {
	// 		user: state.signIn.user,
	// 		loggedIn: state.signIn.loggedIn,
	// 	};
	// });

	// console.log("user =====", state.user);
	// console.log("loggedIn =====", state.loggedIn);

	const handleSubmitSignUp = (event) => {
		event.preventDefault();
		let email = event.target.email.value.toLowerCase();
		let username = event.target.username.value;
		let password = event.target.password.value;
		let list = document.getElementById("roles");
		let role = list.options[list.selectedIndex].value.toLowerCase();
		dispatch(signUpAuth(username, email, password, role));
	};

	return (
		<div className="sign-up">
			<Form
				className="forms"
				onSubmit={(event) => handleSubmitSignUp(event)}
			>
				<Form.Group>
					<Form.Control
						type="text"
						name="username"
						placeholder="Username"
						required
					/>
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter email"
						required
					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Control
						className="password"
						name="password"
						type="password"
						placeholder="Password"
						required
					/>
					<Form.Check
						style={{ textAlign: "left" }}
						id="showPasswordCheckBox"
						label="Show Password"
						type="checkbox"
						onChange={handleShowPassword}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridState">
					<Form.Control id="roles" as="select">
						<option disabled selected>Choose Role</option>
						<option>Teacher</option>
						<option>Student</option>
					</Form.Control>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default SignUpForm;
