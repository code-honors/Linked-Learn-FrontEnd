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
               <h1> We can teach you</h1>
                </div>
                {/* </Roll> */}
              </Fade>
            </div>
        )
    }
}

export default Contact;