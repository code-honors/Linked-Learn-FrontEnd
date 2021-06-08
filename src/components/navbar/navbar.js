import './navbar.scss';
import Home from '../home/home';
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
              src="assets/logo-color.png"
              width="170"
              className="d-inline-block align-top"
              alt="Linked Learn logo"
            />

            <ul className='nav'>
          <li>
            <NavLink exact to="/dashboard" >
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
              PROFILE
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