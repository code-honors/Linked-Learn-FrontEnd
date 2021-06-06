import React from "react";
import "./aboutus.scss";
import { Card } from "react-bootstrap";

const About = () => {
    const cardInfo = [
        {
            image: "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png",
            title: "Loram Loram",
            text: "Loram Loram",
        },
        {
            image:
                "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png",
            title: "Loram Loram",
            text: "Loram Loram",
        },
        {
            image:
                "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png",
            title: "Loram Loram",
            text: "Loram Loram",
        },
        {
            image:
                "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png",
            title: "Loram Loram",
            text: "Loram Loram",
        },
        {
            image: "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png",
            title: "Loram Loram",
            text: "Loram Loram",
        }

    ];

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: "18rem" }} key={index} className="box">
                <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                </Card.Body>
            </Card>
        );
    };

    return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default About;