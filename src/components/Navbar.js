import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter } from 'react-router-dom';
import {HashLink as Link } from 'react-router-hash-link'

const Navbarr = () => {
  return (
   <BrowserRouter>
    <Navbar className="nav" variant="dark">
        <Container>
          <Nav className="me-auto">
          <h5 className="Headerlinks"><Link to="#Header" smooth>{'<'}Home{'/>'}</Link></h5>
            <h5 className="Headerlinks"><Link to="#About" smooth>{'<'}About{'/>'}</Link></h5>
            <h5 className="Headerlinks"><Link to="#Projects" smooth>{'<'}Projects{'/>'}</Link></h5>
            <h5 className="Headerlinks"><Link to="#Contact" smooth>{'<'}Contact{'/>'}</Link></h5>
          </Nav>
        </Container>
      </Navbar>  
      </BrowserRouter>
  
  )
}

export default Navbarr