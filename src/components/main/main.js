import React ,{Component} from 'react';
import {Fade , Roll} from 'react-reveal';
import './main.scss';
import "animate.css/animate.min.css";
function Main () {
    // state = {};
    // render () {
        return (
            <div className='main-section' id='main'>
              <Fade right >
                
                <div className='home' >
                {/* <Roll right> */}
               <h1> We can teach you</h1>
                </div>
                {/* </Roll> */}
              </Fade>
        </div>
            )
    }
// }

export default Main;