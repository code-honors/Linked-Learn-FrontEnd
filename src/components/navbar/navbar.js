// import React  from "react";
// import {ReactNavbar} from "react-responsive-animate-navbar";
 import './navbar.scss';
 import Home from '../home/home';

// function  Navbar()  {

//     return (
//       <ReactNavbar
//         color="#252525"
//         logo="assets/logo4.png"
//         menu={[
//           { name: "HOME",  to: "/" , component:Home },
//           { name: "COURSES", to: "/" },
//           { name: "ABOUT US", to: "/" },
//           {name :  "PROFILE" , to: '/' },
//         ]}
//         social={[
//           {
//             name: "Linkedin",
//             url: "",
//             icon: ["fab", "linkedin-in"],
//           },
//           {
//             name: "Facebook",
//             url: "",
//             icon: ["fab", "facebook-f"],
//           },
//           {
//             name: "Instagram",
//             url: "",
//             icon: ["fab", "instagram"],
//           },
//           {
//             name: "Twitter",
//             url: "",
//             icon: ["fab", "twitter"],
//           },
//         ]}
//       />
//     );
// }


import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
function HideOnScroll(props) {

  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Navbar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
   
        <AppBar style={{ backgroundColor: '#252525' }}>
          <Toolbar>
            <img
              src="assets/logo.png"
              width="190"
              height="65"
              className="d-inline-block align-top"
              alt="Linked Learn logo"
            />

            <ul className='nav'>
          <li>
            <NavLink exact to="/" >
              HOME 
             </NavLink>
          </li>
          <li>
            <NavLink to="">
              COURSES
             </NavLink>
          </li>
          <li>
            <NavLink to="">
              ABOUT
             </NavLink>
          </li>
          <li>
            <NavLink to="/teacher/profile">
              Profile
             </NavLink>
          </li>
        </ul>
            <div className={classes.root}>
              <Avatar alt="Ruba Banat" src="fghjk" />

            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

    </React.Fragment>
  );
}
export default Navbar;