import "./navbar.scss";
// import Home from "../home/home";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
    const state = useSelector(state => {
        return {
            user:state.signIn.user
        }
    })
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
							<li>
								<NavLink to="/user/profile">PROFILE</NavLink>
							</li>
						</ul>
						<div className={classes.root}>
							<Avatar alt="Ruba Banat" src={state.user.profilePic} />
						</div>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
}
export default Navbar;
