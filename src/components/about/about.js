import React ,{Component} from 'react';
import {Fade , Roll} from 'react-reveal';
import './about.scss';
class About extends Component {
    state = {};
    render () {
        return (
        <div className='about-section' id='about'>
            <Fade right>
                <div className='about' >
                {/* <Roll right> */}
               <h1> We can teach you</h1>
                </div>
                {/* </Roll> */}
              </Fade>
        </div>

        )
    }
}

export default About;