import { Switch, Route, useParams } from 'react-router-dom';
import Auth from '../components/sign'
import NotFound from '../components/NotFound';
import Home from '../components/home/home';
import TeacherCourses from '../components/teacherProfile/courses';
import curriculum from '../components/teacherProfile/curriculum';
// import StudentCourses from '../components/studentProfile/course';
import StudentCurriculum from '../components/studentProfile/curriculum';
import Dashboard from '../components/dashboard/dashboard'
import Courses from '../components/courses/all';
import AboutUs from '../components/aboutUs/aboutus.js';
import Index from '../components/course';


export default function Routes() {
  let { id } = useParams();
  return (
    <Switch>
      <Route exact path="/course" component={Index} />
      <Route exact path="/signin" component={Auth} />
      <Route exact path="/" component={Home} />
      <Route exact path="/teacher/profile/:id" component={TeacherCourses} />
      <Route exact path="/teacher/profile/curriculum" component={curriculum} />
      {/* <Route exact path="/student/profile/" component={StudentCourses} /> */}
      <Route exact path="/student/profile/curriculum" component={StudentCurriculum} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
}





