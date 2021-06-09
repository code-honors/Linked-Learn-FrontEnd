import React, {useEffect} from "react";
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
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard(){
	let history = useHistory();
	
		const state = useSelector(state => {
		return {
			user: state.signIn.user,
			loggedIn: state.signIn.loggedIn,
		};
	});

	useEffect(()=> {
		if(state.loggedIn === false) history.push('/');
	// eslint-disable-next-line react-hooks/exhaustive-deps
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