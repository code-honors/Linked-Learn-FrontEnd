import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Home from '../components/home/home';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}
