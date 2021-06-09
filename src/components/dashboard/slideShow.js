import React, {useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './style/slideshow.scss'
import Carousel from "react-bootstrap/Carousel";



function Slideshow(){
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);
    const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
    return(
        <>
      <div className="slideShow" data-aos="fade-right">
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="assets/2.png"
							alt="First slide"
						/>
						<Carousel.Caption>
							<div
								style={{ marginLeft: "45%", marginTop: "-20%" }}
								data-aos="fade-left"
							>
								<h3>
									{" "}
									<strong>Thomas Edison</strong>
								</h3>
								<p>
									"Never stop learning. Read the entire
									panorama of literature."
								</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="assets/slide1.png"
							alt="Second slide"
						/>
						<Carousel.Caption>
							<div
								style={{ marginLeft: "50%", marginTop: "-20%" }}
								data-aos="fade-left"
							>
								<h3>
									{" "}
									<strong>Albert Einstein</strong>
								</h3>
								<p>
									"Imagination is more important than
									knowledge. Knowledge is limited. Imagination
									encircles the world."
								</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="assets/3.png"
							alt="Third slide"
						/>
						<Carousel.Caption>
							<div
								style={{ marginLeft: "30%", marginTop: "-20%" }}
								data-aos="fade-left"
							>
								<h3>
									{" "}
									<strong>Ibn Sina</strong>
								</h3>
								<p>
									"The more brilliant the lightning, the
									quicker it disappears.""
								</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
        </>
    )

}
export default Slideshow;