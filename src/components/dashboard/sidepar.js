import React, { useState, useEffect } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
    FaHeart,
    FaGem,
    FaUser,
    FaSignOutAlt,
    FaHandshake,
} from "react-icons/fa";
import Sticky from "react-stickynode";
import { Link, useHistory } from "react-router-dom";

function SidePar() {
    return(
        <>
        <Sticky>
            <div style={{ height: "100vh", zIndex: "10" }}>
                <ProSidebar collapsed={false}>
                    <SidebarHeader style={{ height: "10vh" }}>
                        <img
                            style={{
                                marginLeft: "10%",
                                marginTop: "5%",
                            }}
                            src="assets/logo-color.png"
                            width="190"
                            className="d-inline-block align-top"
                            alt="Linked Learn logo"
                        />
                    </SidebarHeader>
                    <Menu iconShape="circle">
                        <MenuItem
                            style={{ marginTop: "40%" }}
                            icon={<FaGem />}
                        >
                            {" "}
									Dashboard
								</MenuItem>

                        <MenuItem
                            icon={<FaHeart />}
                            to="/courses"
                            title="Courses"
                        >
                            {" "}
									Courses
									<Link to="/courses" />
                        </MenuItem>

                        <MenuItem icon={<FaUser />} title="Profile">
                            {" "}
									Profile
									<Link to="/profile/" />
                        </MenuItem>
                        <MenuItem icon={<FaHandshake />}>
                            <Link to="/aboutus" />
									Get To Know us
								</MenuItem>

                        <MenuItem
                            icon={<FaSignOutAlt />}
                        >
                            Log Out
								</MenuItem>
                        <SidebarFooter
                            style={{
                                position: "absolute",
                                bottom: "0",
                                padding: "8%",
                            }}
                        >
                            {"Copyright © "} Linked-Learn{" "}
                            {new Date().getFullYear()}
                            {"."}
                        </SidebarFooter>
                    </Menu>
                </ProSidebar>
            </div>
        </Sticky>
    </>
    )
}

export default SidePar;