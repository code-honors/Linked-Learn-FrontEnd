import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Home from '../components/home/home';
import Courses from '../components/courses/all';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses" component={Courses}/>
      <Route component={NotFound} />
    </Switch>
  );
}
