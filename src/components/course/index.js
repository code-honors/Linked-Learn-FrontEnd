import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './nav.js';
import Course from './course';
import Description from './description';
import Review from './review';


export default function Index() {
    return (
        <div>
            <Course />
            <Nav />

            <Switch>
                <Route exact path="/course/description" component={Description} />
                <Route exact path="/course/review" component={Review} />
            </Switch>
        </div>
    )
}
