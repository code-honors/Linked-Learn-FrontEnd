import React from 'react';
import { NavLink } from 'react-router-dom';
import './courses.scss'
import { Card, Figure } from 'react-bootstrap';
var { SocialIcon } = require('react-social-icons');

function curriculum() {

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
                  <li ><NavLink style={{color:"#ff1949"}} to='/teacher/profile/curriculum'>Curriculum</NavLink></li>
                </ul>
                </nav>
                <Card className="pDiv"> 
                    <Card.Title>Hello. This is my story.</Card.Title>
                    <Figure.Caption>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quise bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nih vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auct a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosquad litora torquent per conubia nostra peri.</Figure.Caption>
                    <Figure.Caption>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non maur is vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora to rquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit ed ut imperdiet nisi. Proin condimentum fermentum nunc uorem Ipsn gravi daei.</Figure.Caption>
                    </Card>
                    
                    <Card.Title style={{ marginLeft:"18px"}}>Download PDF</Card.Title>
                    <Figure.Image
                        style={{ margin:"15px", marginLeft:"18px"}}
                        width={200}
                        height={200}
                        alt="171x180"
                        src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/Certificate.jpg"
                    />
                     <Figure.Image
                        style={{float:"left", margin:"10px"}}
                        width={200}
                        height={200}
                        alt="171x180"
                        src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/Certificate.jpg"
                    />
                    </div>

                    <Card className="p2Div"> 
                    <Card.Title>My education</Card.Title>
                    <h6>Harvard University</h6>
                    <Figure.Caption>MBA from Harvard Business School</Figure.Caption>
                    <h6>University of Michigan</h6>
                    <Figure.Caption>BBA from University of Michigan</Figure.Caption>

                    <Card.Title>My expirience</Card.Title>
                    <h6>Google</h6>
                    <Figure.Caption>MBA from Harvard Business School</Figure.Caption>
                    <h6>Self - employed</h6>
                    <Figure.Caption>BBA from University of Michigan</Figure.Caption>
                    <h6>Google</h6>
                    <Figure.Caption>MBA from Harvard Business School</Figure.Caption>
                    </Card>
              
                   

              
            
        </section>
    )
}


export default curriculum;