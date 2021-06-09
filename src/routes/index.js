import { Switch, Route } from 'react-router-dom';
import Auth from '../components/sign'
import NotFound from '../components/NotFound';
import Home from '../components/home/home';
import TeacherCourses from '../components/teacherProfile/courses';
import curriculum from '../components/teacherProfile/curriculum';
// import StudentCourses from '../components/studentProfile/course';
import StudentCurriculum from '../components/studentProfile/curriculum';
import Dashboard from '../components/dashboard/dashboard'
import AllCourses from '../components/courses/index';
import AboutUs from '../components/aboutUs/aboutus.js';
import Join from '../components/chating/Join/Join';
import Chat from '../components/chating/Chat/Chat';
import Index from '../components/course';
import UserProfile from "../components/userProfile/userProfile/userProfile";
import UserUpdateInfo from "../components/userProfile/updateProfile/updateProfile";
import UserCourses from "../components/userProfile/userCourses/userCourses";
import UserEvents from "../components/userProfile/userEvents/userEvents";
import AddCourse from "../components/userProfile/addCourse/addCourse";


export default function Routes() {

	return (
		<Switch>
			<Route exact path="/join" component={Join} />
			<Route exact path="/chat" component={Chat} />
			<Route exact path="/course" component={Index} />
			<Route exact path="/signin" component={Auth} />
			<Route exact path="/" component={Home} />
			<Route exact path="/teacher/profile/:id" component={TeacherCourses} />
			<Route exact path="/teacher/profile/:id/curriculum" component={curriculum} />
			<Route
				exact
				path={`/user/profile`}
				component={UserProfile}
			/>
			<Route
				exact
				path={`/user/update`}
				component={UserUpdateInfo}
			/>
			<Route
				exact
				path={`/user/courses`}
				component={UserCourses}
			/>
			<Route
				exact
				path={`/user/add-course`}
				component={AddCourse}
			/>

			<Route exact path="/student/profile/curriculum" component={StudentCurriculum} />
			<Route exact path="/dashboard" component={Dashboard} />
			<Route exact path="/courses" component={AllCourses} />
			<Route exact path="/aboutus" component={AboutUs} />
			<Route path='*' component={NotFound} />
		</Switch>
	);
}





