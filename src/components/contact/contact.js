import React from 'react';
import { Fade } from 'react-reveal';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import './contact.scss';
import Logo from '../navbar/logo';

function Contact() {

    return (
        <>
            <Logo />
            <div className='contact-section' id='contact'>
                <Fade right>
                    <div className='contact' >
                        <h1 className='sub2'> Find Us</h1>
                        <p className='par2'>
                            <MailIcon style={{ marginRight: '15px' }}>
                            </MailIcon>
                            <strong> Email us  :</strong> <br /> <br />
                Feel free to ask and we’ll get back to you. <br />
                <a href='mailto:Linked-Learn@gmail.com' style={{color:'black', textDecoration:'underLine'}}>Linked-Learn@gmail.com </a> 
                <br /> <br />
                            <PhoneIcon style={{ marginRight: '15px' }}>
                            </PhoneIcon>
                            <strong> Call us :</strong> <br /><br />
               Contact our customer care center<br />
               <a href='tel:+962799999990' style={{color:'black', textDecoration:'underLine'}}>+962799999990</a> 
               </p>
                    </div>

                </Fade>
            </div>
        </>
    )
}

export default Contact;