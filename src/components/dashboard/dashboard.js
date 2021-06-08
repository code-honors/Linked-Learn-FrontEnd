import React, { useState, useEffect } from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaHeart, FaGem, FaUser, FaSignOutAlt ,FaHandshake,FaUsers} from 'react-icons/fa';
import './dashboard.scss';
import Sticky from 'react-stickynode';
import ProgressBar from 'react-animated-progress-bar';
import Courses from '../courses/all'
import Teachers from '../allTeachers/teachers';
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Carousel from 'react-bootstrap/Carousel';
import Footer2 from '../footer/footer2';
import HeadsetIcon from '@material-ui/icons/Headset';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Link } from 'react-router-dom';
import {signOut} from '../../store/actions';
import {useDispatch} from 'react-redux';


function Dashboard() {
    const dispatch = useDispatch();

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
        AOS.refresh();
    }, []);
    const [collapsed, setCollapsed] = useState(false);
    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className='body'>
                <div className='dev'>
                    <div className='words' data-aos="fade-left">
                        <h3> <strong>Express yourself.</strong>  </h3>
                        <h3> <strong>Show creativity.</strong> </h3>
                        <h3> <strong> Stay inspired</strong> . </h3>
                    </div>
                </div>
                <Sticky>
                    <div style={{ height: '100vh', zIndex: '10' }} >
                        <ProSidebar collapsed={false} >
                            <SidebarHeader style={{height:'10vh'}}>
                                <img
                                    style={{ marginLeft: '10%',marginTop:'5%' }}
                                    src="assets/logo-color.png"
                                    width="190"
                                    className="d-inline-block align-top"
                                    alt="Linked Learn logo"
                                />
                            </SidebarHeader>
                            <Menu iconShape="circle">
                             
                                <MenuItem  style={{ marginTop: '30%' }} icon={<FaGem />}> Dashboard</MenuItem>
                              
                                <MenuItem icon={<FaHeart />}  to='/courses' title="Courses" > Courses
                                <Link to="/courses" />
                                </MenuItem>
                               
                                <MenuItem icon={<FaUser />} title="Profile" > Profile
                                <Link to="/profile/" />
                                </MenuItem>                            
                                <MenuItem icon={<FaUsers />} title="Profile" > Chat Room
                                <Link to="" />
                                </MenuItem>                            
                                <MenuItem  icon={<FaHandshake />}>
                                <Link to="/aboutus" />Get To Know us</MenuItem>
                            
                                <MenuItem icon={<FaSignOutAlt />}  onClick={()=> dispatch(signOut)}>Log Out
                                </MenuItem>
                                <SidebarFooter style={{ position: 'absolute', bottom: '0', padding: '8%' }}>
                                    {'Copyright © '} Linked-Learn {' '}
                                    {new Date().getFullYear()}
                                    {'.'}
                                </SidebarFooter>
                            </Menu>
                        </ProSidebar>
                    </div>
                </Sticky>
            </div>
            <div className='courses' data-aos="fade-left" data-aos-delay="500">
                <h2 className='sub5' style={{ marginTop: '10%', marginLeft: '5%', marginBottom: '-2%' }}> <strong> Popular Courses</strong> </h2> <br /><br />
                <Courses />
            </div>
            <div className='teacher' data-aos="fade-right">
            <h2 className='sub5' style={{ marginTop: '10%', marginLeft: '5%' }}> <strong> Our Teachers</strong> </h2> <br /><br />
                <Teachers/>
            </div>
            <div className='rate' data-aos="fade-right" >
                <div className="whyChoose">
                    <h2 className='sub5'> <strong>Why Choose US</strong> </h2> <br /><br />
                    <p>Many successful years of experience in the education make us leaders in this field.</p>
                </div>
                <div className='progresss'>
                    <h6>Mentorship</h6>
                    <ProgressBar
                        width="400px"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="70"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        trackBorderColor="grey"
                    />
                    <h6>Education</h6>
                    <ProgressBar
                        width="400px"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="90"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        trackBorderColor="grey"
                    />
                    <h6>Learning</h6>
                    <ProgressBar
                        width="400px"
                        height="10px"
                        rect
                        fontColor="gray"
                        percentage="80"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        trackBorderColor="grey"
                    />
                </div>
            </div>
            <div className='timeline' data-aos="fade-left">
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Eat</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Study</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Sleep</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                        </TimelineSeparator>
                        <TimelineContent>Repeat</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>

            <div className='slideShow' data-aos="fade-right">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/2.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div style={{ marginLeft: '45%', marginTop: '-20%' }} data-aos="fade-left">
                                <h3> <strong>Thomas Edison</strong></h3>
                                <p>"Never stop learning. Read the entire panorama of literature."</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/slide1.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <div style={{ marginLeft: '50%', marginTop: '-20%' }} data-aos="fade-left">
                                <h3 > <strong>Albert Einstein</strong></h3>
                                <p>"Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."</p>

                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/3.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div style={{ marginLeft: '30%', marginTop: '-20%' }} data-aos="fade-left">
                                <h3> <strong>Ibn Sina</strong></h3>
                                <p>
                                    "The more brilliant the lightning, the quicker it disappears.""
                                </p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='support' data-aos="flip-down">
                <div style={{ width: '55%' }} >
                    <HeadsetIcon style={{ color: '#ef2853', fontSize: '43px' }}>
                    </HeadsetIcon>
                    <h4><strong>Fast support</strong></h4>
                    <p>In case you have any questions, our team will gladly help</p>
                </div>
                <div style={{ width: '55%' }}>
                    <HomeIcon style={{ color: '#ef2853', fontSize: '43px' }}>
                    </HomeIcon>
                    <h4><strong> What we do</strong></h4>
                    <p>Sharing knowledge worldwide & offering the best courses.</p>
                </div>
                <div style={{ width: '55%' }}>
                    <LocationOnIcon style={{ color: '#ef2853', fontSize: '43px' }}>
                    </LocationOnIcon>
                    <h4><strong>Where we are</strong></h4>
                    <p>Learn online from wherever you want or find our offices.</p>
                </div>
                <div style={{ width: '55%' }}>
                    <ContactMailIcon style={{ color: '#ef2853', fontSize: '43px' }}>
                    </ContactMailIcon>
                    <h4><strong>Contact us</strong></h4>
                    <p>Let’s find a perfect course for you now! Send us a request!</p>
                </div>
            </div>
            
            <Footer2 />
        </>
    )
}

export default Dashboard;