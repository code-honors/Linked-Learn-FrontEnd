import React from "react";
import './course.scss'
import Button from '@material-ui/core/Button';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
// import Nav from './nav.js';
// import Description from './description';
// import Review from './review';
// import { Switch, Route } from 'react-router-dom';

function Course() {
    return (
        <>
            <Navbar />
            <div className='body'>
                <h1 className='titleClass'><strong>Embracing digital</strong> </h1>
                <div className='firstDiv' >
                    <img className='firstImg' src='https://academist.qodeinteractive.com/wp-content/uploads/2018/06/educator-img-1-100x100.jpg'></img>
                    <h3 className='pClass'>	Instructor: Anna Holt</h3>
                    <h3 className='pClass'>Categories: New Technologies</h3>
                    <div className='btn-Class'>
                        <Button variant="contained" color="secondary" >
                            Add Course
                        </Button>
                    </div>

                </div>
                <div className='secDiv'>
                    <img className='secImg' src='https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-2-1.jpg'></img>
                    <div className='aboutClass'>
                        <h2>Description</h2>
                        <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem Ipsn gravida nibh vel velit auctor aliquet. Class aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit.
                        Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem gravida nibh vel velit auctor aliquet.</p>
                    </div>
                </div>





            </div>
            <Footer />

        </>
    )

}

export default Course;