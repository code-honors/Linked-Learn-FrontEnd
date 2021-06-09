import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRemoteData } from '../../store/actions';
import { NavLink, useParams } from 'react-router-dom';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import './courses.scss'
import { Card, Figure } from 'react-bootstrap';
var { SocialIcon } = require('react-social-icons');
const api = 'https://linked-learn.herokuapp.com/teacher';

function Curriculum(props) {
    let { id } = useParams();
    useEffect(() => {
        props.getRemoteData(`${api}/profile/${id}`, 'tProfile');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const profile = props.profile.profile;
    console.log(profile);
    return (
        <>
            <Navbar />
            <section className='products'>

                <Figure style={{ marginRight: "20px" }}>
                    <Figure.Image
                        width={300}
                        height={400}
                        alt="171x180"
                        src={profile.profilepic}
                    />
                    <Card.Title> {profile.firstname} {profile.lastname}</Card.Title>
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
                    <SocialIcon style={{ height: 25, width: 25 }} bgColor="white" fgColor="black" url="https://twitter.com/in/jaketrent" />
                    <SocialIcon style={{ height: 25, width: 25 }} bgColor="white" fgColor="black" url="https://gogleplus.com/in/jaketrent" />

                </Figure>
                <div >
                    <nav >
                        <ul>
                            <li><NavLink style={{ color: "#ff1949" }} to={`/teacher/profile/${id}`}>Courses</NavLink></li>
                            <li ><NavLink style={{ color: "#ff1949" }} to={`/teacher/profile/${id}/curriculum`}>Curriculum</NavLink></li>
                        </ul>
                    </nav>
                    <Card className="card1" style={{ width: "668px", padding: "15px", margin: "15px", marginLeft: '70px' }}>
                        <Card.Title>Hello. This is my story.</Card.Title>
                        <Figure.Caption>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quise bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nih vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auct a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosquad litora torquent per conubia nostra peri.</Figure.Caption>
                        <Figure.Caption>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non maur is vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora to rquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit ed ut imperdiet nisi. Proin condimentum fermentum nunc uorem Ipsn gravi daei.</Figure.Caption>
                    </Card>

                    <Card.Title style={{ marginLeft: "70px" }}>Download PDF</Card.Title>
                    <div style={{ marginLeft: '70px' }}>
                        <Figure.Image
                            style={{ margin: "15px", marginLeft: "18px" }}
                            width={200}
                            height={200}
                            alt="171x180"
                            src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/Certificate.jpg"
                        />
                        <Figure.Image
                            style={{ float: "left", margin: "10px" }}
                            width={200}
                            height={200}
                            alt="171x180"
                            src="https://academist.qodeinteractive.com/wp-content/uploads/2018/07/Certificate.jpg"
                        />
                    </div>
                </div>

                <Card className="card2" style={{ width: "256px", padding: "15px", margin: "15px", marginTop: "59px" }}>
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
            <Footer />

        </>
    )
}

const mapStateToProps = (state) => ({ profile: state.profile });
const mapDispatchToProps = { getRemoteData };
export default connect(mapStateToProps, mapDispatchToProps)(Curriculum);
