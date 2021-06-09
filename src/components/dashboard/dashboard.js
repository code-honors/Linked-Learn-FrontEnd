import React from "react";
import SidePar from './sidepar'
import Background from './background';
import CoursesDash from './courses';
import TeachersDiv from './teachers';
import Chooseus from './chooseus';
import TimeLine from './timeline';
import Slideshow from './slideShow';
import Support from './support';
import './style/dashboard.scss';
import Footer2 from "../footer/footer2";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import cookie from "react-cookies";

function Dashboard(){
  
	let history = useHistory();
	const dispatch = useDispatch();

	const handleLogout = () => {
		// console.log(5)
		cookie.remove('auth', {path:'/'});
		dispatch(signOut())
	}
		const state = useSelector(state => {
		return {
			user: state.signIn.user,
			loggedIn: state.signIn.loggedIn,
		};
	});

	useEffect(()=> {
		if(state.loggedIn === false) history.push('/');
	}, [state.loggedIn]);
  
	return (
<div>
	<SidePar/>
	<div className='bigDiv'>
	<Background/>
	<CoursesDash/>
	<TeachersDiv/>
	<Chooseus/>
	<TimeLine/>
	<Slideshow/>
	<Support/>
	<Footer2 />
	</div>
</div>

	)
}

export default Dashboard;