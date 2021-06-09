import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './style/support.scss'
import HeadsetIcon from "@material-ui/icons/Headset";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactMailIcon from "@material-ui/icons/ContactMail";



function Support(){
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
      <div className="support" data-aos="flip-down">
				<div style={{ width: "55%" }}>
					<HeadsetIcon
						style={{ color: "#ef2853", fontSize: "43px" }}
					></HeadsetIcon>
					<h4>
						<strong>Fast support</strong>
					</h4>
					<p>
						In case you have any questions, our team will gladly
						help
					</p>
				</div>
				<div style={{ width: "55%" }}>
					<HomeIcon
						style={{ color: "#ef2853", fontSize: "43px" }}
					></HomeIcon>
					<h4>
						<strong> What we do</strong>
					</h4>
					<p>
						Sharing knowledge worldwide & offering the best courses.
					</p>
				</div>
				<div style={{ width: "55%" }}>
					<LocationOnIcon
						style={{ color: "#ef2853", fontSize: "43px" }}
					></LocationOnIcon>
					<h4>
						<strong>Where we are</strong>
					</h4>
					<p>
						Learn online from wherever you want or find our offices.
					</p>
				</div>
				<div style={{ width: "55%" }}>
					<ContactMailIcon
						style={{ color: "#ef2853", fontSize: "43px" }}
					></ContactMailIcon>
					<h4>
						<strong>Contact us</strong>
					</h4>
					<p>
						Let’s find a perfect course for you now! Send us a
						request!
					</p>
				</div>
			</div>
        </>
    )

}
export default Support;