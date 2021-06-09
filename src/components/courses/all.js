import { connect } from 'react-redux';
import { getRemoteData } from '../../store/actions';
import { useEffect } from 'react';
import { Card, Container, Figure } from 'react-bootstrap';
import './courses.scss';

const api = 'https://linked-learn.herokuapp.com/courses';

const Courses = (props) => {
  // console.log(props.courses);
  useEffect(() => {
    // console.log('step 1: courses component', api);
    props.getRemoteData(api,'courses');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let courses =
    props.courses.display.length > 0
      ? props.courses.display
      : props.courses.courses;
  return (
    <>
      <Container className='courses-container'>
        {courses.map((course) => {
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
                  style={{ float: 'left', color:'black'}}
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
        })}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({ courses: state.courses });
const mapDispatchToProps = { getRemoteData };
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
