import React from 'react'
import MYPHOTO from '../Images/Myphoto2.jpg'
import Button from 'react-bootstrap/Button'


const About = () => {
  return (
    <div className="aboutmain" id='About'>
    <div className='about'>
    <div className="photo"></div>
    <img src={MYPHOTO} alt="hello" />
    </div>
    <div className="aboutskill">
    <div style={{display:'flex',flexDirection:'column',fontWeight:'bold'}}>
    <h2 className='about-heading' >About Me</h2>
    <div  className="skill-body-heading">
    <h5 className="skill-body">My name is Venkatagiri Gowda and i'm a web developer who enjoys
    designing and programming web applications.I have developed strong 
    passion for the software development and love what i do.</h5>
    <Button className="project-btn" variant="primary"><a className="project-link"href="https://vggcart.herokuapp.com/" target="_blank">Download Resume</a></Button>
       </div>
    </div>
    <div>
    <h2 className="skill">My Skill Set</h2>
    <div className="title-heading">
    <div className='title1'>
      <h3 style={{fontWeight:'bold'}}>Frontend</h3>
      <h5>HTML</h5>
      <h5>CSS</h5>
      <h5>JAVA SCRIPT</h5>
      <h5>REACTJS</h5>
    </div>
    <div className='title2'>
      <h3 style={{fontWeight:'bold'}}>Backend</h3>
      <h5>NodeJS</h5>
      <h5>ExpressJS</h5>
      <h5>MongoDB</h5>
      <h5>Mongoose</h5>
    </div>
    <div className='title3'>
      <h3 style={{fontWeight:'bold'}}>Tools</h3>
      <h5>Git</h5>
      <h5>VS Code Editor</h5>
      <h5>Atom Code Editor</h5>
      
    </div>
    </div>
   </div>
      
</div>

    </div>
  )
}

export default About