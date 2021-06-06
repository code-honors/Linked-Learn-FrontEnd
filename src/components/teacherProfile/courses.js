import React from 'react';
import { NavLink } from 'react-router-dom';
import './courses.scss'
import { Card, Figure } from 'react-bootstrap';
var { SocialIcon } = require('react-social-icons');

function Courses() {

    return (
        <section className='products'>
                <Figure style={{marginRight:"20px"}}>
                    <Figure.Image
                        width={300}
                        height={400}
                        alt="171x180"
                        src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/educator-img-3.jpg"
                    />
                    <Card.Title>Linda Mailss</Card.Title>
                    <Card.Text>Special Assistant</Card.Text>
                    <Figure.Caption>
                    Lorem ipsum dolor sit amet, consec  incididunt 
                   </Figure.Caption>
                   <Figure.Caption>
                   ut labore.tetur adipiscing, sed do eiusmod  </Figure.Caption>
                   <Figure.Caption>
                   tempor incididunt ut labore.
                   </Figure.Caption>
                   <SocialIcon style={{ height: 25, width: 25 }} bgColor="white" fgColor="black" url="https://linkedin.com/in/jaketrent" />
                   <SocialIcon style={{ height: 25, width: 25 }} bgColor="white" fgColor="black" url="https://twitter.com/in/jaketrent"  />
                   <SocialIcon style={{ height: 25, width: 25 }} bgColor="white" fgColor="black" url="https://gogleplus.com/in/jaketrent"  />

                </Figure>
                <div >
                <nav >
                <ul>
                  <li><NavLink style={{color:"#ff1949"}} to='/teacher/profile'>Courses</NavLink></li>
                  <li><NavLink style={{color:"#ff1949"}} to='/teacher/profile/curriculum'>Curriculum</NavLink></li>
                </ul>
                </nav>
                <Card className="card" style={{ width: '18rem' , height: "68.2%" }}>
                    <Card.Img variant="top" src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-12.jpg" />
                    <Card.Body>
                        <Card.Title>Digital Leadership</Card.Title>
                        <Card.Text>Linda Mailss</Card.Text>
                        <Figure.Caption>
                            Lorem ipsum dolor sit amet, consec tetur adipiscing, sed do
                        </Figure.Caption>
                        <Card.Img style={{ width: "20px", height: "20px" }} variant="top" src="data:image/png;base64,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" />
                        <Card.Img style={{ width: "20px", height: "20px" }} variant="top" src="data:image/png;base64,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" />
                        <Card.Title style={{float:"right",color:"#ff1949"}} href="#">Free</Card.Title>
                    </Card.Body>
                </Card>
                </div>

                <Card  className="card" style={{ width: '18rem',marginTop:"65px" }}>
                    <Card.Img variant="top" src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-9.jpg" />
                    <Card.Body>
                        <Card.Title>Sculpting clay</Card.Title>
                        <Card.Text>Linda Mailss</Card.Text>
                        <Figure.Caption>
                            Lorem ipsum dolor sit amet, consec tetur adipiscing, sed do
          </Figure.Caption>
                        <Card.Img style={{ width: "20px", height: "20px" }} variant="top" src="data:image/png;base64,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" />
                        <Card.Img style={{ width: "20px", height: "20px" }} variant="top" src="data:image/png;base64,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" />
                        <Card.Title style={{float:"right",color:"#ff1949"}} href="#">Free</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '18rem',marginTop:"65px" }}>
                    <Card.Img variant="top" src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/courses-4.jpg" />
                    <Card.Body>
                        <Card.Title>Photography</Card.Title>
                        <Card.Text>Linda Mailss</Card.Text>
                        <Figure.Caption>
                            Lorem ipsum dolor sit amet, consec tetur adipiscing, sed do
          </Figure.Caption>
                        <Card.Img style={{ width: "20px", height: "20px" }} variant="top" src="data:image/png;base64,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" />
                        <Card.Img style={{ width: "20px", height: "20px" }} variant="top" src="data:image/png;base64,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" />
                        <Card.Title style={{float:"right",color:"#ff1949"}} href="#">Free</Card.Title>
                    </Card.Body>
                </Card>

        </section>
    )
}


export default Courses;