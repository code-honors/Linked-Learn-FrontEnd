import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./updateProfile.scss";

function UserUpdateInfo(props) {

    // useEffect(() => { 
    //     document.querySelector('#firstName').value = 'TestFirstName';
    //     document.querySelector('#LastName').value = 'TestLastName';
    //     document.querySelector('#email').value = 'test.1234@test.test';
    //     document.querySelector('#password').value = 'VerySecretPassword';
    // }, [])
    const handleShowPassword = () => {
        let type = document.querySelector('#password').type
        type === 'password' ? document.querySelector('#password').type = 'text' : document.querySelector('#password').type = 'password';
    }
	return (
		<div id="accountFormDiv">
			<Form id="accountForm">
				<Form.Row>
					<Form.Group as={Col} >
						<Form.Label>First Name</Form.Label>
						<Form.Control id="firstName" type="text" required />
					</Form.Group>

					<Form.Group as={Col} >
						<Form.Label>Last Name</Form.Label>
						<Form.Control id="lastName" type="text" required />
					</Form.Group>
				</Form.Row>

				<Form.Group >
					<Form.Label>Email</Form.Label>
					<Form.Control id="email" type="email" required />
				</Form.Group>

				<Form.Group >
					<Form.Label>Password</Form.Label>
					<Form.Control id="password" type="password" required />
                    <Form.Check id="showPasswordCheckBox" type="checkbox" label="Show Password" onChange={handleShowPassword} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Update 
				</Button>
			</Form>
		</div>
	);
}

export default UserUpdateInfo;
