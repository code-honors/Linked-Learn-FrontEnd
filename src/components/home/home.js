import React, { useState } from 'react';
import Main from '../main/main';
import About from '../about/about';
import Contact from '../contact/contact';
import Sign from '../sign/signInForm';
import './home.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

function Home() {


  return (

    // @splidejs/react-splide
    <>
      <ReactScrollWheelHandler
        upHandler={(e) => console.log("scroll up")}
        downHandler={(e) => console.log("scroll down")}
        style={{
          width: "100%",
          height: "100vh",
          transition: "backgroundColor .5s ease-out",
        }}
      >
        <Splide
          options={{
            type: 'fade',
            direction: 'ttb',
            height: '100vh',
            updateOnMove: true,
            arrows: false,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
          }}
        >
          <SplideSlide>
            <Main />
          </SplideSlide>
          <SplideSlide>
            <About />
          </SplideSlide>
          <SplideSlide>
            <Contact />
          </SplideSlide>
          <SplideSlide>
            <Sign />
          </SplideSlide>
        </Splide>
      </ReactScrollWheelHandler>
    </>
    // end of @splidejs/react-splide
  );
}

export default Home;
