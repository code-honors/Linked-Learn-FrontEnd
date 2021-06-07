import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';
import UserPage from '../components/userProfile/index';

export default function Routes() {
  return (
    // <Switch>
    //   <Route exact path="/student" component={UserPage} />
    //   {/* <Route component={NotFound} /> */}
    // </Switch>
    <UserPage/>
  );
}
