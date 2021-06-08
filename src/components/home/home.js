  
import React, { useEffect, useState } from 'react';
import Main from '../main/main';
import About from '../about/about';
import Contact from '../contact/contact';
import Sign from '../sign/signInForm';
import './home.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


import ReactPageScroller from 'react-page-scroller';

function Home() {
 
  //react-page-scroller
  const [page, setPage] = useState(0);

  const handlePage = (page) => {
  	setPage(page);
  };

  const handleUnavailable = (e) => {
  	console.log(e);
  };

  // end of react-page-scroller

  return (
<>
{/* /* react-page-scroller */ }
<div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }}
>
 <ReactPageScroller
    pageOnChange={handlePage}
    containerWidth={window.innerWidth *1}
    containerHeight={window.innerHeight * 1}
    customPageNumber={page}
    onBeforePageScroll={(e) => handleUnavailable(e)}
  >
    <Main />
    <About />
    <Contact />
    <Sign />
  </ReactPageScroller>
</div> 
{/* end of react-page-scroller  */ }
 </>
  
  );
}

export default Home;
