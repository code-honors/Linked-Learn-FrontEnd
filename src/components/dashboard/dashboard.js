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


function Dashboard(){
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