import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  
  return (
    <div className="headermain" id='Header'>
      <div className="Heading">

        <h1 className="name">Hi,</h1>
        <h1 className="name">I'm Venkat,</h1>
        <h1 className="name">Web Developer</h1>
        <h4>MERN Stack</h4>
        <Button className="Headerbtn"><a className="project-link"href="#Contact">Contact Me</a></Button>
        
      </div>
      
       
    </div>
  );
};

export default Header;
