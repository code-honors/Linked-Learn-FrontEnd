import { Switch, Route } from 'react-router-dom';

import Sign from '../components/sign/sign-in'

import NotFound from '../components/NotFound';
import Home from '../components/home/home';
import AboutUs from '../components/aboutUs/aboutus.js';


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/signin" component={Sign} />
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutus" component={AboutUs} />


      <Route component={NotFound} />
    </Switch>
  );
}
// import UserPage from '../components/userProfile/index';

// export default function Routes() {
//   return (
//     // <Switch>
//     //   <Route exact path="/student" component={UserPage} />
//     //   {/* <Route component={NotFound} /> */}
//     // </Switch>
//     <UserPage/>
//   );
// }



