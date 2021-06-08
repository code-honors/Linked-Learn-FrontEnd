import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRemoteData } from '../../store/actions';
import { NavLink, useParams } from 'react-router-dom';
import './courses.scss';
import { Card, Figure, Container } from 'react-bootstrap';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
var { SocialIcon } = require('react-social-icons');

const api = 'https://linked-learn.herokuapp.com/teacher';

function Courses(props) {
  let { id } = useParams();
  useEffect(() => {
    props.getRemoteData(`${api}/profile/${id}`, 'tProfile');
    props.getRemoteData(`${api}/${id}/courses`, 'tCourses');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const profile = props.profile.profile;
  const courses = props.profile.tCourses;

  return (
    <>
      <Navbar />
      <section className="products">
        <Figure style={{ marginRight: '20px' }}>
          <Figure.Image
            width={300}
            height={400}
            alt="171x180"
            src={
              profile.profilepic /*|| `http://placehold.jp/300x400.png?text=${profile.firstname}`*/
            }
          />
          <Card.Title>
            {profile.firstname} {profile.lastname}
          </Card.Title>
          <Card.Text>Special Assistant</Card.Text>
          <Figure.Caption>
            Lorem ipsum dolor sit amet, consec incididunt
          </Figure.Caption>
          <Figure.Caption>
            ut labore.tetur adipiscing, sed do eiusmod{' '}
          </Figure.Caption>
          <Figure.Caption>tempor incididunt ut labore.</Figure.Caption>
          <SocialIcon
            style={{ height: 25, width: 25 }}
            bgColor="white"
            fgColor="black"
            url="https://linkedin.com/in/jaketrent"
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            bgColor="white"
            fgColor="black"
            url="https://twitter.com/in/jaketrent"
          />
          <SocialIcon
            style={{ height: 25, width: 25 }}
            bgColor="white"
            fgColor="black"
            url="https://gogleplus.com/in/jaketrent"
          />
        </Figure>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink
                  className="nav_link"
                  style={{ color: '#ff1949' }}
                  to={`/teacher/profile/${id}`}
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav_link"
                  style={{ color: '#ff1949' }}
                  to={`/teacher/profile/${id}/curriculum`}
                >
                  Curriculum
                </NavLink>
              </li>
            </ul>
          </nav>
          <Container className="courses-container">
            {courses.length > 0 ? courses.map((course) => {
              return (
                <Card
                  className="card"
                  key={course.id}
                  style={{ width: '18rem', height: '68.2%' }}
                >
                  <Card.Img variant="top" src={course.img} />
                  <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>{course.category}</Card.Text>
                    <Figure.Caption>{course.description}</Figure.Caption>
                    <Card.Link
                      href={`/courses/${course.id}`}
                      style={{ float: 'left', color: 'black' }}
                    >
                      Details
                    </Card.Link>
                    <Card.Link
                      style={{ float: 'right', color: '#ff1949' }}
                      href={`/courses/${course.id}`}
                    >
                      Add to My Courses
                    </Card.Link>
                  </Card.Body>
                </Card>
              );
            }): <p>There is nothing to show</p>}
          </Container>
        </div>
      </section>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({ profile: state.profile });
const mapDispatchToProps = { getRemoteData };
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
