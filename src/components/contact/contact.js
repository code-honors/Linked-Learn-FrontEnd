import React ,{Component} from 'react';
import {Fade , Roll} from 'react-reveal';
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
                Contact us on :
                Linked-Learn@gmail.com <br/> <br/>
                Or Call us on :
                0799999990
               </p>
                </div>
                {/* </Roll> */}
              </Fade>
            </div>
        )
    }
}

export default Contact;