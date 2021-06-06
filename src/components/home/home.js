import React, { useState } from 'react';
import Main from '../main/main';
import About from '../about/about';
import Contact from '../contact/contact';
import Sign from '../sign/sign-in';
import './home.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


// import ReactPageScroller from 'react-page-scroller';

function Home() {
  //react-page-scroller
  // const [page, setPage] = useState(0);

  // const handlePage = (page) => {
  // 	setPage(page);
  // };

  // const handleUnavailable = (e) => {
  // 	console.log(e);
  // };

  // end of react-page-scroller

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
            type: 'loop',
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
// <>
{/* /* react-page-scroller */ }
{/* <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '5rem',
        margin: '0 auto',
      }}
    >
      <div style={{ cursor: 'pointer' }} onClick={() => handlePage(0)}>
        1
      </div>
      <div style={{ cursor: 'pointer' }} onClick={() => handlePage(1)}>
        2
      </div>
      <div style={{ cursor: 'pointer' }} onClick={() => handlePage(2)}>
        3
      </div>
    </div> */}
// <div
//   style={{
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//   }}
// >
//   <ReactPageScroller
//     pageOnChange={handlePage}
//     containerWidth={window.innerWidth *1}
//     containerHeight={window.innerHeight * 1}
//     customPageNumber={page}
//     onBeforePageScroll={(e) => handleUnavailable(e)}
//   >
//     <Main />
//     <About />
//     <Contact />
//   </ReactPageScroller>
// </div> 
{/* end of react-page-scroller  */ }
  //  </>