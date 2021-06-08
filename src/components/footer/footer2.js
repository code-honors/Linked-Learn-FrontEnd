import React from 'react';
import { makeStyles } from '@material-ui/core/';
import { createMuiTheme,withStyles,} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { pink } from '@material-ui/core/colors';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles((theme) => ({
    footer: {
        color: '#FFFFFFB3',
        backgroundColor: '#252525',
        padding: theme.spacing(8)

    },
    container :{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '3%',
    },
    h3:{
        marginBottom:'10%',
        color:'white'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        '& .MuiTextField-root': {
            color: 'white'
        },
    },
    margin: {
        marginBottom: '20px',
        height:'6vh'

    },
}));
const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#ef2853',
           
        },
        '& .MuiOutlinedInput-input' :{
            padding:'12px',
            
            
        },
        "MuiTextFelid": {
            color: "white",
           
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#ef2853',
            color: 'white',

        },
        '& .MuiOutlinedInput-root': {
           
            '&:hover fieldset': {
                borderColor: '#ef2853',
                color: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ef2853',
                color: 'white',
            },
        },
    },
})(TextField);
const theme = createMuiTheme({
    palette: {
        primary: pink,
    },
    MuiTextField: {
        color: 'white',
    },
});
const Footer2 = () => {
    const classes = useStyles();
    return (
        
        <footer className={classes.footer}>
            <div className={classes.container}>
            <div >
                <h3 className={classes.h3}> Questions?</h3>
                

            </div>

            <div >
                <h3 className={classes.h3} >FAQs</h3>
                <details>
                    <summary>Do I have to start my course at a certain time?</summary>
                    <p>No, you can start at anytime and anywhere. </p>
                </details>
                <details>
                    <summary>Are you an accredited institution? Do I receive a certificate?</summary>
                    <p>No, You learn for yourself.</p>
                </details>
                <details>
                    <summary>How do I take a course?</summary>
                    <p>After you enroll in a course, you can access it by clicking on the course link.</p>
                </details>

            </div>
            <div>
                <h3 className={classes.h3}>About</h3>
                <p>Linked Learn is dedicated to constant learning & knowledge sharing.</p> <br />
                <p className='par2'>
                    <MailIcon style={{ marginRight: '15px' }}>
                    </MailIcon>
               <a href='mailto:Linked-Learn@gmail.com' style={{color:'white', textDecoration:'underLine'}}>Linked-Learn@gmail.com </a> 
                <br /> <br />
                    <PhoneIcon style={{ marginRight: '15px' }}>
                    </PhoneIcon>
                    <a href='tel:+962799999990' style={{color:'white', textDecoration:'underLine'}}>+962799999990</a> 
               </p>
            </div>
            <div>
                <h3 className={classes.h3}>Flexible learning</h3>
                <img
                    src="assets/footer-map.png"
                    width="280"
                    className="d-inline-block align-top"
                    alt="Linked Learn logo"
                />
            </div>
            </div>
        </footer>
    );
}

export default Footer2;
