import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaHeart, FaGem, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './dashboard.scss';
import { Fade } from 'react-reveal';
import Sticky from 'react-stickynode';


function Dashboard() {

    const [collapsed, setCollapsed] = useState(false);
    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };
    return (
        <>
            <div className='body'>
                <div className='dev'>
                    <Fade right>
                        <div className='words'>
                            <h3> <strong>Express yourself.</strong>  </h3>
                            <h3> <strong>Show creativity.</strong> </h3>
                            <h3> <strong> Stay inspired</strong> . </h3>
                        </div>
                    </Fade>
                </div>
                <Sticky>
                    <div style={{ height: '100vh', zIndex: '10' }}>
                        <ProSidebar collapsed={false} >
                            <SidebarHeader>
                                <img
                                    style={{ marginLeft: '9%' }}
                                    src="assets/logo.png"
                                    width="200"
                                    height="65"
                                    className="d-inline-block align-top"
                                    alt="Linked Learn logo"
                                />
                            </SidebarHeader>
                            <Menu iconShape="circle">
                                <MenuItem style={{ marginTop: '40%' }} icon={<FaGem />}>Dashboard</MenuItem>
                                <SubMenu icon={<FaHeart />} title="Courses" >
                                    <MenuItem>Component 1</MenuItem>
                                    <MenuItem>Component 2</MenuItem>
                                    <MenuItem>Component 1</MenuItem>
                                </SubMenu>
                                <SubMenu icon={<FaUser />} title="Profile" >
                                    <MenuItem>Component 1</MenuItem>
                                </SubMenu>
                                <MenuItem icon={<FaSignOutAlt />}>Log Out</MenuItem>
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
            <div className="whyChoose">
                <h2 className='sub5'> <strong>Why Choose US</strong> </h2> <br/><br/>
                <p>Many successful years of experience in the education make us leaders in this field.</p>
            </div>
         
        </>
    )
}

export default Dashboard;