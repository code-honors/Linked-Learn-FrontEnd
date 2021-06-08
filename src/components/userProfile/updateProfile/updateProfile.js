import { useEffect } from "react";
import { If, Then, Else } from "react-if";
import { useSelector } from "react-redux";
import Nav from "../nav/nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./updateProfile.scss";

function UserUpdateInfo(props) {
	const state = useSelector((state) => {
		return {
			user: state.signIn.user,
			loggedIn: state.signIn.loggedIn,
		};
	});

	// useEffect(() => {
	// 	let firstName = document.querySelector("#firstName");
	// 	let 
	// 	setTimeout(() => {
	// 		document.querySelector("#firstName").value = "TestFirstName";
	// 		document.querySelector("#LastName").value = "TestLastName";
	// 		document.querySelector("#email").value = "test.1234@test.test";
	// 		document.querySelector("#password").value = "VerySecretPassword";
	// 	}, 500);
	// }, []);
	const handleShowPassword = () => {
		let type = document.querySelector("#password").type;
		type === "password"
			? (document.querySelector("#password").type = "text")
			: (document.querySelector("#password").type = "password");
	};
	return (
		<main id="userAccountContainer">
			<If condition={state.loggedIn}>
				<Then>
					<>
						<Nav />
					</>
					<div className="accountFormDiv">
						<Form id="accountForm">
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>Username</Form.Label>
									<Form.Control
										id="username"
										type="text"
										value = {state.user.username}
										required
									/>
								</Form.Group>

								<Form.Group as={Col}>
									<Form.Label>E-mail</Form.Label>
									<Form.Control
										id="email"
										type="email"
										value={state.user.email}
										required
									/>
								</Form.Group>
							</Form.Row>

							<Form.Group>
								<Form.Label>Role</Form.Label>
								<Form.Control
									id="role"
									type="text"
									value={state.user.role}
									required
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control
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
	);
}

export default UserUpdateInfo;
