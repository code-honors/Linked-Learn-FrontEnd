import React ,{Component} from 'react';
import {Fade , Roll} from 'react-reveal';
import './main.scss';
import "animate.css/animate.min.css";
function Main () {
    // state = {};
    // render () {
        return (
          <>
            <div className='main-section' id='main'>
              <Fade right >
                
                <div className='home' >
                {/* <Roll right> */}
               <h1 className='sub'> We can teach you</h1> 
              
               <p className='par'>Knowledge is power <br/> Your Education is Your Passport <br/> <br/> Build your Future</p>

                </div>
                {/* </Roll> */}
               <img className='img1' src='https://academist.qodeinteractive.com/wp-content/uploads/2018/07/fullsc-slider-img-1.png'></img>
              </Fade>
        </div>
               </>
            )
    }
// }

export default Main;