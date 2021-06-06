import { connect } from 'react-redux';
import { getRemoteData } from '../../store/actions';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const api = 'https://linked-learn.herokuapp.com/courses';

const Courses = (props) => {
  console.log(props.courses);
  useEffect(() => {
    console.log('step 1: courses component', api);
    props.getRemoteData(api);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let courses =
    props.courses.display.length > 0
      ? props.courses.display
      : props.courses.courses;
  return (
    <>
      {courses.map((course) => {
        return (
          <Card key={course.id} className="bg-dark text-white">
            <Card.Img src={course.img} alt="Card image" height={50} />
            <Card.ImgOverlay>
              <Card.Title>{course.name}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Card.Text>{course.category}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => ({ courses: state.courses });
const mapDispatchToProps = { getRemoteData };
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
