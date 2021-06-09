import React, { useEffect } from 'react';
import "./style/teachers.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Teachers from "../allTeachers/teachers";


function TeachersDiv() {
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
            <div className="teacher" data-aos="fade-right">
                <h2
                    className="sub5"
                    style={{ marginTop: "10%", marginLeft: "5%" }}
                >
                    <strong> Our Teachers</strong>
                </h2>
                <br />
                <br />
                <Teachers />
            </div>
        </>
    )
}

export default TeachersDiv;