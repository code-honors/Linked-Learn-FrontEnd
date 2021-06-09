import React,{useEffect} from 'react';
import "./style/courses.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Courses from "../courses/all";

function CoursesDash(){
    useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-sine",
			delay: 100,
		});
		AOS.refresh();
	}, []);
    return (
        <>
        <div className="coursesDiv" data-aos="fade-left" data-aos-delay="500">
				<h2
					className="sub5"
					style={{
						marginTop: "10%",
						marginLeft: "5%",
						marginBottom: "-2%",
					}}
				>					
					<strong> Popular Courses</strong>
				</h2>
				<br />
				<br />
                <div className='courses' >
				<Courses />
                </div>
			</div>
        </>
    )
}

export default CoursesDash;