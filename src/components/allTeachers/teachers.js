import { connect } from 'react-redux';
import { getRemoteData } from '../../store/actions';
import { useEffect } from 'react';
import {  Container } from 'react-bootstrap';
import './teachers.scss';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Link,  useParams} from 'react-router-dom';

const api = 'https://linked-learn.herokuapp.com/all/teachers';

const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(3),
          
        },
        flexDirection:'column',
        justifyContent:'center'
      },
      large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
    }));

const Teachers = (props) => {
  
    const classes = useStyles();
  console.log('teachers',props.teachers);
  useEffect(() => {
    console.log('step 1: teachers', api);
    props.getRemoteData(api,'teachers');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let teachers =
    props.teachers.teachers;
  return (
    <>
    
      <Container className='teachers-container'>
        {teachers.map((teacher) => {
          return (
          <div className='teachers'>
            <div className={classes.root}>
             <Link to={`/teacher/profile/${teacher.id}`}> 
            <Avatar alt={teacher.firstname} src={teacher.profilepic} className={classes.large} /> <br/>
             </Link>
            <h4>{teacher.firstname} {teacher.lastname}</h4>
          </div>
          </div>
          );
        })}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({ teachers: state.teachers });
const mapDispatchToProps = { getRemoteData };
export default connect(mapStateToProps, mapDispatchToProps)(Teachers);
