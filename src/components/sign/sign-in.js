import React from 'react'
import SignForm from './form.js'
import './sign.scss';
import {ListGroup } from 'react-bootstrap';


function Sign() {
    const [option, setOption] = React.useState(1)
	
	return (
		<div className='container'>
			<ListGroup horizontal as='ul' className='options'>
				<ListGroup.Item as="li"  className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>Sign in</ListGroup.Item>
				<ListGroup.Item as="li"  className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Sign up</ListGroup.Item>
				<ListGroup.Item as="li"  className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>Forgot</ListGroup.Item>
			</ListGroup >
			<SignForm option={option} />
			
		</div>
	)
}

export default Sign
