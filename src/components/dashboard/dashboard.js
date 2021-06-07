import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaHeart, FaBars, FaGem, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './dashboard.scss';
import { Fade } from 'react-reveal';


function Dashboard() {

    const [collapsed, setCollapsed] = useState(false);
    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
      };
    return (
        <>
            <div className='body'>
                <div className='dev'>
                    <img src='https://academist.qodeinteractive.com/wp-content/uploads/2018/07/left-menu-home-slider-1-1.png' />
                    <Fade right>
                        <div className='words'>

                            <h3> <strong>Express yourself.</strong>  </h3>
                            <h3> <strong>Show creativity.</strong> </h3>
                            <h3> <strong> Stay inspired</strong> . </h3>
                        </div>
                    </Fade>
                </div>
                <ProSidebar collapsed={false} style={{ height: '100vh', position: 'sticky' }}>
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
                            {'Copyright © '}

          Linked-Learn
        {' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </SidebarFooter>
                    </Menu>
                </ProSidebar>
            </div>
            <h3>Express yourself. </h3>
            <h3>Show creativity. </h3>
            <h3>Stay inspired. </h3>
        </>
    )
}

export default Dashboard;