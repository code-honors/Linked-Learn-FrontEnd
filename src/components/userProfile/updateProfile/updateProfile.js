import { useEffect } from "react";
import { If, Then, Else } from "react-if";
import { useSelector } from "react-redux";
import Nav from "../nav/nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import "./updateProfile.scss";

function UserUpdateInfo(props) {
	const state = useSelector((state) => {
		return {
			user: state.signIn.user,
			loggedIn: state.signIn.loggedIn,
		};
	});

	const handleSubmitUpdate = (event) => {
		event.preventDefault();
		let username = event.target.username.value;
		let email = event.target.email.value;
		let list = document.getElementById("rolesU");
		let role = list.options[list.selectedIndex].value.toLowerCase();
		let password = event.target.password.value;
	};

	const handleShowPassword = () => {
		let type = document.querySelector("#password").type;
		type === "password"
			? (document.querySelector("#password").type = "text")
			: (document.querySelector("#password").type = "password");
	};

	useEffect(() => {
		// document.querySelector('#username').value = state.user.username;
		// document.querySelector('#email').value = state.user.email;
		// document.querySelector('#rolesU').value = state.user.role;
	}, []);

	return (
		<>
			<Navbar />
			<main id="userAccountContainer">
				<If condition={state.loggedIn}>
					<Then>
						<>
							<Nav />
						</>
						<div className="accountFormDiv">
							<Form
								id="accountForm"
								onSubmit={(event) => handleSubmitUpdate(event)}
							>
								<Form.Row>
									<Form.Group as={Col}>
										<Form.Label>Username</Form.Label>
										<Form.Control
											id="username"
											type="text"
											required
										/>
									</Form.Group>

									<Form.Group as={Col}>
										<Form.Label>E-mail</Form.Label>
										<Form.Control
											id="email"
											type="email"
											required
										/>
									</Form.Group>
								</Form.Row>
								<Form.Group>
									<Form.Label>Password</Form.Label>
									<Form.Control
										name="password"
										id="password"
										type="password"
										required
									/>
									<Form.Check
										id="showPasswordCheckBox"
										type="checkbox"
										label="Show Password"
										onChange={handleShowPassword}
									/>
								</Form.Group>
								<Button variant="primary" type="submit">
									Update
								</Button>
							</Form>
						</div>
					</Then>
					<Else>Please Sign In</Else>
				</If>
			</main>
			<Footer/>
		</>
	);
}

export default UserUpdateInfo;
