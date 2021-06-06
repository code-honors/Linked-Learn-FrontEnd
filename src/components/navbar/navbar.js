import React  from "react";
import {ReactNavbar} from "react-responsive-animate-navbar";
 import './navbar.scss'
function  Navbar()  {
 
    return (
      <ReactNavbar
        color="#252525"
        logo="assets/logo4.png"
        menu={[
          { name: "HOME", to: "/" },
          { name: "COURSES", to: "/" },
          { name: "ABOUT US", to: "/" },
          {name :  "PROFILE" , to: '/' },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    );
}

export default Navbar;