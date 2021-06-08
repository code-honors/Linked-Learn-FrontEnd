import { Switch, Route, useParams } from 'react-router-dom';
import Auth from '../components/sign/index'
import NotFound from '../components/NotFound';
import Home from '../components/home/home';
import TeacherCourses from '../components/teacherProfile/courses';
import curriculum from '../components/teacherProfile/curriculum';
import Dashboard from '../components/dashboard/dashboard'
import Courses from '../components/courses/all';
import AboutUs from '../components/aboutUs/aboutus.js';
import Index from '../components/course';
import UserPage from '../components/userProfile/'
import UserProfile from "../components/userProfile/userProfile/userProfile";
import UserUpdateInfo from "../components/userProfile/updateProfile/updateProfile";
import UserCourses from "../components/userProfile/userCourses/userCourses";
import UserEvents from "../components/userProfile/userEvents/userEvents";
import AddCourse from "../components/userProfile/addCourse/addCourse";


export default function Routes() {
    // let { id } = useParams()
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Auth} />
      <Route exact path="/course" component={Index} /> 
      {/* <Route exact path="/user/profile" component={UserPage} /> */}
      <Route exact path="/teacher/profile" component={TeacherCourses} />
      <Route exact path="/teacher/profile/curriculum" component={curriculum} />
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
							path={`/user/events`}
							component={UserEvents}
						/>
						<Route
							exact
							path={`/user/add-course`}
							component={AddCourse}
						/>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
}





