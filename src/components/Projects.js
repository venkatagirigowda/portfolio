import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MERN from '../Images/mernecom.png'
import TRAVEL from '../Images/reacttravel1.png'
import KETO from '../Images/reactketo.png'
import PORTFOLIO from '../Images/portfolio.png'


const Projects = () => {
  return (<div className='projects' id='Projects'>
  <h1 className='project-header'>My Project's</h1>
    <div className='projectmain'>
         <Card className="project-card">
         
      <Card.Img style={{margin:'0'} }variant="top" src={KETO} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>Keto Recipe's</Card.Title>
        <Card.Text style={{fontWeight:'bold'}}>
        Project Keto Recipe's Website using ReactJs,Vanilla Css and HTML
        </Card.Text>
        <Button className="project-btn" variant="primary"><a className="project-link"href="https://github.com/venkatagirigowda/react-keto" target="_blank">Check Code</a></Button>
        <Button className="project-btn" variant="primary"><a className="project-link"href="https://venkatagirigowda.github.io/react-keto/" target="_blank">Live Demo</a></Button>
      </Card.Body>
    </Card>

    <Card className="project-card" >
      <Card.Img  style={{margin:'0'} } variant="top" src={MERN} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>E-Commerce</Card.Title>
        <Card.Text style={{fontWeight:'bold'}}>
        E-Commerce Website using ReactJs,CSS,BootStrap,NodeJS,ExpressJS,MongoDB and Mongoose
        </Card.Text>
        <Button className="project-btn" variant="primary"><a className="project-link"href="https://github.com/venkatagirigowda/MERN-E-Commerce" target="_blank" >Check Code</a></Button>
        <Button className="project-btn" variant="primary"><a className="project-link"href="https://vggcart.herokuapp.com/" target="_blank">Live Demo</a></Button>
      </Card.Body>
    </Card>

    <Card className="project-card">
      <Card.Img style={{margin:'0'} } variant="top" src={TRAVEL} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>Travel App</Card.Title>
        <Card.Text style={{fontWeight:'bold'}}>
        Project Travel Website using ReactJs,Vanilla Css,Google Map Api,Rapid Api and HTML
        </Card.Text>
        <Button className="project-btn" variant="primary"><a className="project-link"href="https://github.com/venkatagirigowda/React-Travel" target="_blank">Check Code</a></Button>
      </Card.Body>
    </Card>

    <Card className="project-card" >
      <Card.Img  style={{margin:'0'} } variant="top" src={PORTFOLIO} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>Portfolio</Card.Title>
        <Card.Text style={{fontWeight:'bold'}}>
        Portfolio using ReactJs,BootStrap,Emailjs,CSS and HTML
        </Card.Text>
        <Button className="project-btn" variant="primary"><a className="project-link"href="" target="_blank">Check Code</a></Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Projects