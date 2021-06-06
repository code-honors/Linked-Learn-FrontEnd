import { Switch, Route } from 'react-router-dom';
import Sign from '../components/sign/sign-in'
import NotFound from '../components/NotFound';
import Home from '../components/home/home';
import AboutUs from '../components/aboutUs/aboutus.js';
import Index from '../components/course';


export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/signin" component={Sign} />
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/course" component={Index} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}



