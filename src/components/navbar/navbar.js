// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//         color: 'black',
//     },
//     title: {
//         // flexGrow: 10,
//         color: 'black',
//         marginLeft:'5%',

//     },
//     appBarTransparent: {
//         backgroundColor: 'rgba(255, 255, 255, 0.005)'
//     },
//     appBarSolid: {
//         backgroundColor: '#fff'
//     }
// }))

// function Navbar() {
//     const classes = useStyles();
//     const [navBackground, setNavBackground] = useState('appBarTransparent')

//     const navRef = React.useRef()
//     navRef.current = navBackground

//     useEffect(() => {
//         const handleScroll = () => {
//             const show = window.scrollY > 10
//             if (show) {
//                 setNavBackground('appBarSolid')

//             } else {
//                 setNavBackground('appBarTransparent')
//             }
//         }
//         document.addEventListener('scroll', handleScroll)
//         return () => {
//             document.removeEventListener('scroll', handleScroll)
//         }
//     }, [])

//     return (
//         <div className={classes.root}>
//             <AppBar position='fixed' className={classes[navRef.current]}>
//                 <Toolbar>
//                     {/* <IconButton className={classes.menuButton}>
//                         <MenuIcon></MenuIcon>
//                     </IconButton> */}
//                       <img
//                     src="assets/logo.png"
//                     width="200"
//                     height="76"
//                     className="d-inline-block align-top"
//                     alt="Linked Learn logo"
//                 />
//                     <Typography variant='h6' className={classes.title} style={{marginLeft:'20%'}}>
//                         Home
//                         </Typography>
//                     <Typography variant='h6' className={classes.title}>
//                         Courses
//                         </Typography>
//                     <Typography variant='h6' className={classes.title}>
//                         About us
//                         </Typography>
//                     <Button color='black' style={{marginLeft:'37%'}}> Login</Button>
//                 </Toolbar>

//             </AppBar>
//         </div>
//     )
// }

// export default Navbar;

import React  from "react";
import {ReactNavbar} from "react-responsive-animate-navbar";
 import './navbar.scss'
function  Navbar()  {
 
    return (
      <ReactNavbar
        color="#191919"
        logo="assets/logo-small.png"
        menu={[
          { name: "HOME", to: "/" },
          { name: "Courses", to: "/" },
          { name: "ABOUT US", to: "/" },
          { name: "CONTACT", to: "/" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    );
}

export default Navbar;