import React, { useEffect } from 'react';
import "./aboutus.scss";
import { Card } from "react-bootstrap";
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
        AOS.refresh();
    }, []);
    const cardInfo = [
        {
            image: "assets/afnan.png",
            title: "Afnan Damra",
            text: "Full Stack Developer",
            linkedin: 'https://www.linkedin.com/in/afnandamra/',
            git: 'https://github.com/afnandamra',
            face: 'https://www.facebook.com/afnan.damra.56'
        },
        {
            image:
                "assets/ruba.jpg",
            title: "Ruba Banat",
            text: "Full Stack Developer",
            linkedin: 'https://www.linkedin.com/in/ruba-banat-964b04158/',
            git: 'https://github.com/RubaBanat',
            face: 'https://www.facebook.com/ruba.banat/?_rdc=1&_rdr'
        },
        {
            image:
                "assets/ahmad.jpg",
            title: "Ahmad Alfrijat",
            text: "Full Stack Developer",
            linkedin: 'https://www.linkedin.com/in/zaid-alasfar-7b84a8190/',
            git: 'https://github.com/ahmadfrijat',
            face: 'https://www.facebook.com/zaid.alasfar/'
        },
        {
            image:
                "https://media-exp1.licdn.com/dms/image/C4E03AQFSlRi3F9FGbQ/profile-displayphoto-shrink_200_200/0/1608985382035?e=1628726400&v=beta&t=3a-jVttj_faZi0MiAqorZCornQvC98eHoe5GzhC9ms8",
            title: "Bashar Nofal",
            text: "Full Stack Developer",
            linkedin: 'https://www.linkedin.com/in/zaid-alasfar-7b84a8190/',
            git: 'https://github.com/BasharNofal',
            face: 'https://www.facebook.com/zaid.alasfar/'
        },
        {
            image: "assets/zaid.jpg",
            title: "Zaid Al-Asfar",
            text: "Full Stack Developer",
            linkedin: 'https://www.linkedin.com/in/zaid-alasfar-7b84a8190/',
            git: 'https://github.com/zaidalasfar97',
            face: 'https://www.facebook.com/zaid.alasfar/'
        }

    ];

    const renderCard = (card, index) => {
        return (
            <>

                <Card style={{ width: "20rem",boxShadow:'0 0 10px 10px #eee' }} key={index} className="box">
                    <Card.Img variant="top" src={card.image} style={{ objectFit: 'cover', height: '200px' }} />
                    <Card.Body>
                        <Card.Title as='h4'><strong>{card.title}</strong></Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                        <a href={card.linkedin}><LinkedInIcon style={{ margin: '8%', color: '#EF2853' }}></LinkedInIcon></a>
                        <a href={card.git}> <GitHubIcon style={{ margin: '8%', color: '#EF2853' }}></GitHubIcon></a>
                        <a href={card.face}> <FacebookIcon style={{ margin: '8%', color: '#EF2853' }}></FacebookIcon></a>


                    </Card.Body>
                </Card>

            </>
        );
    };

    return (
        <>
            <Navbar />
            <h1 className='sub8' data-aos="fade-left">The Founders</h1>
            <div className="grid" data-aos="fade-right">
                {cardInfo.map(renderCard)}
            </div>
            <Footer />
        </>
    )

};

export default About;