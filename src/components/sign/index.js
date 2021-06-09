import { useState } from "react";
import { If, Then, Else } from "react-if";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import SignInForm from "./signInForm";
import SignUpForm from "./signUpForm";
import Logo from "../navbar/logo";
import "./sign.scss";

function Auth() {
	let [switchForm, setSwitchFrom] = useState(true);
    const handleSwitchSignIn = () => {
        setSwitchFrom(true);
    }

    const handleSwitchSignUp = () => {
        setSwitchFrom(false);
    }

	return (
		<>
			<Logo />
			<div className="sign-form" >
				<div className="sign">
					<h3 className="join">Join Us Now For Free</h3>
				</div>
				<div className="signIn">
					<div className="container">
						<div>
							<ButtonGroup id="fromSwitch" aria-label="Basic example">
								<Button variant="secondary" onClick={handleSwitchSignIn}>Sign In</Button>
								<Button variant="secondary" onClick={handleSwitchSignUp}>Sign Up</Button>
							</ButtonGroup>
						</div>
						<If condition={switchForm}>
							<Then>
								<SignInForm />
							</Then>
                            <Else>
							    <SignUpForm />
                            </Else>
						</If>
					</div>
				</div>
			</div>
		</>
	);
}

export default Auth;
