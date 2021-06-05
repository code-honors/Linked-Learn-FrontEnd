import React from 'react'
import SignForm from './form.js'
import './sign.scss';
import {ListGroup } from 'react-bootstrap';
import {Fade } from 'react-reveal';


function Sign() {
    const [option, setOption] = React.useState(1)
	
	return (
		<>
		
		<div className='sign-form' id='sign-in'>
		<Fade right >
			<div className='sign' >	
			<h3 className='join' >
				Join Us Now For Free
			</h3>
			</div>
		<div className='sighIn' >
		<div className='container'>
			<ListGroup horizontal as='ul' className='options' style={{marginBottom:'30px'}}>
				<ListGroup.Item as="li" className='list' style={{backgroundColor:'#ef2853'}}  className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>Sign in</ListGroup.Item>
				<ListGroup.Item as="li" className='list'  style={{backgroundColor:'#ef2853'}} className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Sign up</ListGroup.Item>
				<ListGroup.Item as="li" className='list'  style={{backgroundColor:'#ef2853'}}  className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>Forgot</ListGroup.Item>
			</ListGroup >
			<SignForm option={option} />
			</div>	
		</div>
		</Fade>
        </div>
		</>
	)
}

export default Sign;
