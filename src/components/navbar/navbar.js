import "./navbar.scss";
// import Home from "../home/home";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import cookie from "react-cookies";
import {signOut} from "../../store/actions";
import {useDispatch} from "react-redux";
import logo from './logo-color.png';

const useStyles = makeStyles((theme) => ({
    
    root: {
        display: "flex",
		"& > *": {
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
    let dispatch = useDispatch();
    let history = useHistory();
    const state = useSelector(state => {
        return {
            user:state.signIn.user,
            loggedIn:state.signIn.loggedIn
        }
    });

    const handleLogout = () => {
		cookie.remove("auth", { path: "/" });
		dispatch(signOut());
	};

    useEffect(() => {
        if(!state.loggedIn) history.push('/')
    }, [state.loggedIn])

	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar style={{ backgroundColor: "#252525" }}>
					<Toolbar>
						<img
							src={logo}
							width="170"
							className="d-inline-block align-top"
							alt="Linked Learn logo"
						/>

						<ul className="nav">
							<li>
								<NavLink exact to="/dashboard">
									HOME
								</NavLink>
							</li>
							<li>
								<NavLink to="/courses">COURSES</NavLink>
							</li>
							<li>
								<NavLink to="/aboutus">ABOUT US</NavLink>
							</li>
							<li id="logOut" onClick={handleLogout} >
								<a href="#">LOG OUT</a> 
							</li>
						</ul>
						<div className={classes.root}>
                        <NavLink to="/user/profile">
							<Avatar alt={state.user.username} src={state.user.profilePic} />
                        </NavLink>

						</div>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
}
export default Navbar;
