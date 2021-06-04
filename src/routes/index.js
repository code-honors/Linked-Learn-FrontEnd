import { Switch, Route } from 'react-router-dom';
import Sign from '../components/sign/sign-in'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/signin" component={Sign} />
    </Switch>
  );
}