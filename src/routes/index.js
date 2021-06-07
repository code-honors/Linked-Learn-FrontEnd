import { Switch, Route } from 'react-router-dom';

import Sign from '../components/sign/sign-in'

import NotFound from '../components/NotFound';
import Home from '../components/home/home';
import Dashboard from '../components/dashboard/dashboard'


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/signin" component={Sign} />
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />

      <Route path='*' component={NotFound} />
    </Switch>
  );
}

 

