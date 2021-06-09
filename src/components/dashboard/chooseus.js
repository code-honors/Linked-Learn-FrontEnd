import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "react-animated-progress-bar";
import './style/chooseus.scss'


function Chooseus(){
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);
    return(
        <>
        <div className="rate" data-aos="fade-right">
				<div className="whyChoose">
					<h2 className="sub5" id="chooseUsUnderLine">
						{" "}
						<strong>Why Choose US</strong>{" "}
					</h2>{" "}
					<br />
					<br />
					<p>
						Many successful years of experience in the education
						make us leaders in this field.
					</p>
				</div>
				<div className="progresss">
					<h6>Mentorship</h6>
					<ProgressBar
						width="400px"
						height="10px"
						rect
						fontColor="gray"
						percentage="70"
						rectPadding="1px"
						rectBorderRadius="20px"
						trackPathColor="transparent"
						trackBorderColor="grey"
					/>
					<h6>Education</h6>
					<ProgressBar
						width="400px"
						height="10px"
						rect
						fontColor="gray"
						percentage="90"
						rectPadding="1px"
						rectBorderRadius="20px"
						trackPathColor="transparent"
						trackBorderColor="grey"
					/>
					<h6>Learning</h6>
					<ProgressBar
						width="400px"
						height="10px"
						rect
						fontColor="gray"
						percentage="80"
						rectPadding="1px"
						rectBorderRadius="20px"
						trackPathColor="transparent"
						trackBorderColor="grey"
					/>
				</div>
			</div>
        </>
    )

}
export default Chooseus;