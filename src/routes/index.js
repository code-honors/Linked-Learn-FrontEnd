import { Switch, Route } from 'react-router-dom';
import Sign from '../components/sign/sign-in'
import NotFound from '../components/NotFound';
import Home from '../components/home/home';
import TeacherCourses from '../components/teacherProfile/courses';
import curriculum from '../components/teacherProfile/curriculum';
import Dashboard from '../components/dashboard/dashboard'
import Courses from '../components/courses/all';
import AboutUs from '../components/aboutUs/aboutus.js';
import Join from '../components/chating/Join/Join';
import Chat from '../components/chating/Chat/Chat';


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/join" component={Join} />
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/signin" component={Sign} />
      <Route exact path="/" component={Home} />
      <Route exact path="/teacher/profile" component={TeacherCourses} />
      <Route exact path="/teacher/profile/curriculum" component={ curriculum} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/courses" component={Courses}/>
      <Route exact path="/aboutus" component={AboutUs} />
      <Route path='*' component={NotFound} />

    </Switch>
  );
}
    
 



