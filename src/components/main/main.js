import React, { Component } from 'react';
import { Fade, Roll } from 'react-reveal';
import './main.scss';
import "animate.css/animate.min.css";
import Logo from '../navbar/logo';

function Main() {

  return (
    <>
      <Logo />

      <div className='main-section' id='main'>
        <Fade right >

          <div className='home' >
            {/* <Roll right> */}
            <h1 className='sub'> We can teach you</h1>

            <p className='par'> Education is Our Passport to the future , for tomorrow belongs to the people who prepare for it today <br /> <br /> <strong> Build your Future</strong> <br /> <br /> <strong>Knowledge is power</strong> </p>

          </div>
          {/* </Roll> */}
          <img className='img1' src='https://academist.qodeinteractive.com/wp-content/uploads/2018/07/fullsc-slider-img-1.png'></img>
        </Fade>
      </div>
    </>
  )
}


export default Main;