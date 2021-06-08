import { Route, Switch,useRouteMatch } from 'react-router-dom';
import Nav from './nav/nav'
import UserProfile from './userProfile/userProfile';
import UserUpdateInfo from './updateProfile/updateProfile';
import UserCourses from './userCourses/userCourses';
import UserEvents from './userEvents/userEvents';
import './index.scss'

function UserPage(props) {
    let { path } = useRouteMatch();
    // console.log({path})
    return (
        <main id="userAccountContainer">
            <>
                <Nav />
            </>
            <Switch>
                <Route exact path={`${path}profile`} component={UserProfile}/>
                <Route exact path={`${path}update`} component={UserUpdateInfo}/>
                <Route exact path={`${path}courses`} component={UserCourses}/>
                <Route exact path={`${path}events`} component={UserEvents}/>
            </Switch>
        </main>
    )
}

export default UserPage