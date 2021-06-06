import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import Logo from '../navbar/logo';

import './about.scss';

function About() {

    return (
        <>
            <Logo />
            <div className='about-section' id='about'>
                <Fade right>
                    <div className='about' >
                        {/* <Roll right> */}
                        <h1 className='sub1'> Who we are </h1>
                        <p className='par1'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." <br /> <br /> We are proud of our success and of our experienced teachers and mentors. Join us today.</p>
                    </div>
                    <img className='img2' src='https://academist.qodeinteractive.com/wp-content/uploads/2018/07/fullsc-slider-img-2.png'></img>
                </Fade>
            </div>
        </>
    )
}

export default About;