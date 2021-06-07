import { Switch, Route } from 'react-router-dom';
import Sign from '../components/sign/sign-in'
import NotFound from '../components/NotFound';
import Home from '../components/home/home';
import Courses from '../components/teacherProfile/courses';
import curriculum from '../components/teacherProfile/curriculum';
import Dashboard from '../components/dashboard/dashboard'
import AboutUs from '../components/aboutUs/aboutus.js';


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/signin" component={Sign} />
      <Route exact path="/" component={Home} />
      <Route exact path="/teacher/profile" component={ Courses} />
      <Route exact path="/teacher/profile/curriculum" component={ curriculum} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/aboutus" component={AboutUs} />

      <Route path='*' component={NotFound} />

    </Switch>
  );
}
    
 



