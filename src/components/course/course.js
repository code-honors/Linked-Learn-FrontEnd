import React from "react";
import './course.scss'
import Button from '@material-ui/core/Button';
import Nav from './nav.js';
import Description from './description';
import Review from './review';
import { Switch, Route } from 'react-router-dom';

function Course() {
    return (
        <>
            <div className='body'>
                <h1 className='titleClass'><strong>Embracing digital</strong> </h1>
                <div className='firstDiv' >
                    <img className='firstImg' src='https://academist.qodeinteractive.com/wp-content/uploads/2018/06/educator-img-1-100x100.jpg'></img>
                    <p className='pClass'>	Instructor: Anna Holt</p>
                    <p className='pClass'>Categories: New Technologies</p>
                    <div className='btn-Class'>
                        <Button variant="contained" color="secondary" >
                            Add Course
                        </Button>
                    </div>

                </div>
                <div className='secDiv'>
                    <img className='secImg' src='https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-2-1.jpg'></img>

                    <Nav />
                    <Switch>
                        <Route exact path="/course/description" component={Description} />
                        <Route exact path="/course/review" component={Review} />
                    </Switch>
                </div>





            </div>

        </>
    )

}

export default Course;