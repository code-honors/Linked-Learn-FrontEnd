import React from 'react'
import {Form , Button } from 'react-bootstrap';

import './sign.scss';


function SignForm({ option }) {
    return (
	
		  
		<Form className='account-form' onSubmit={(evt) => evt.preventDefault()} style={{  marginLeft:'16px'}} >
			<Form.Group controlId="formBasicEmail" className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
				<Form.Control style={{  width:'80%',marginBottom :'3%'}} name='email' type='email' placeholder='E-mail' required />
				<Form.Control style={{  width:'80%',marginBottom :'3%'}}  name='password' type='password' placeholder='Password' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
				<Form.Control  style={{  width:'80%',marginBottom :'3%'}} as="select" defaultValue="Choose..." name="roles" id="roles" required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false}>
						<option value="student">student</option>
						<option value="teacher">teacher</option>
						{/* <option value="admin">admin</option> */}
					</Form.Control>
				{/* <Form.Control  name='repeat-password' type='password' placeholder='Repeat password' required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} /> */}
			</Form.Group>
			<Button  style={{backgroundColor:'#ef2853' , marginTop:'20px', width:'80%'}} className='btn-submit-form' type='submit'>
				{ option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }
			</Button>
		</Form>
		
	)
}

export default SignForm;
