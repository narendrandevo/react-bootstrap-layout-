import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';

const AppBar = () => {
  return (
    <div>
          <Navbar bg="" expand="lg" className='cl'>
      <Container>
        <Navbar.Brand href="#home" className=' display-5 text-light fw-bold display-5'><span className='m-3'><i className='bi bi-camera-fill ok'></i></span>Naren Photography</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link href="#home" className='fw-bold text-light'>Home</Nav.Link>
            <Nav.Link href="#package" className='fw-bold text-light' >Package</Nav.Link>
            <Nav.Link href="#review" className='fw-bold text-light'>Review</Nav.Link>
            <Nav.Link href="#contact" className='fw-bold text-light'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default AppBar