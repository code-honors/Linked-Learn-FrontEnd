import React,{useEffect} from 'react';
import "./style/background.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function Background(){
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
        <div className="dev">
					<div className="words" data-aos="fade-left">
						<h3>
							{" "}
							<strong>Express yourself.</strong>{" "}
						</h3>
						<h3>
							{" "}
							<strong>Show creativity.</strong>{" "}
						</h3>
						<h3>
							{" "}
							<strong> Stay inspired</strong> .{" "}
						</h3>
					</div>
				</div>
        </>
    )
}

export default Background;