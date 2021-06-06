import React from "react";
import './course.scss'

function Course() {
    return (
        <>
            <div className='body'>
                <div className='firstDiv' >
                    <img className='firstImg' src='https://academist.qodeinteractive.com/wp-content/uploads/2018/06/educator-img-1-100x100.jpg'></img>
                    <p className='pClass'>	Instructor: Anna Holt</p>
                    <p className='pClass'>Categories: New Technologies</p>
                    <button className='addBtn'>Add Course</button>
                </div>
                <div className='secDiv'>
                    <img className='secImg' src='https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-2-1.jpg'></img>
                </div>
               

            </div>
        </>
    )

}

export default Course;