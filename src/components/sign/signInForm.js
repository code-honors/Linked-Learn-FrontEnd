import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { signInAuth } from "../../store/actions";

function SignInForm(props) {
	const dispatch = useDispatch();

	const state = useSelector((state) => {
		return {
			user: state.signIn.user,
			loggedIn: state.signIn.loggedIn,
		};
	});

	console.log("user =====", state.user);
	console.log("loggedIn =====", state.loggedIn);

	const handleShowPassword = () => {
		let type = document.querySelector(".password").type;
		type === "password"
			? (document.querySelector(".password").type = "text")
			: (document.querySelector(".password").type = "password");
	};

	const handleSubmitSignIn = (event) => {
		event.preventDefault();
		let username = event.target.username.value;
		let password = event.target.password.value;
		dispatch(signInAuth(username, password));
	};

	return (
		<div className="sign-in">
			<Form className="forms" onSubmit={(event) => handleSubmitSignIn(event)}>
				<Form.Group controlId="formBasicEmail">
					<Form.Control name="username" type="text" placeholder="Username" required />
				</Form.Group>
				<Form.Group  controlId="formBasicPassword">
					<Form.Control className="password" name="password" type="password" placeholder="Password" required />
				</Form.Group>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check style={{textAlign:"left"}}
						id="showPasswordCheckBox"
						type="checkbox"
						label="Show Password"
						onChange={handleShowPassword}
					/>
				</Form.Group>
				<Button type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default SignInForm;
