import React ,{Component} from 'react';
import {Fade , Roll} from 'react-reveal';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import './contact.scss';
class Contact extends Component {
    state = {};
    render () {
        return (

            <div className='contact-section' id='contact'>
                <Fade right>
                <div className='contact' >
                {/* <Roll right> */}
               <h1 className='sub2'> Find Us</h1>
               <p className='par2'>
                <MailIcon style={{marginRight:'15px'}}> 
                </MailIcon>
                <strong> Email us  :</strong> <br/> <br/>
                Feel free to ask and we’ll get back to you. <br/><br/>
                Linked-Learn@gmail.com 
                <br/> <br/>
                <PhoneIcon style={{marginRight:'15px'}}>
                </PhoneIcon>
               <strong> Call us :</strong> <br/><br/>
               Contact our customer care center<br/><br/>
                0799999990
               </p>
                </div>
               
              </Fade>
            </div>
        )
    }
}

export default Contact;