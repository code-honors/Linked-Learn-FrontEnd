import { Switch, Route } from 'react-router-dom';
import Sign from '../components/sign/sign-in'
import NotFound from '../components/NotFound';
import Home from '../components/home/home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/signin" component={Sign} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}
    
 