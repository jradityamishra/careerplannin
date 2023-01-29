
import  React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./navbar.css"
const Navbarhead = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" id="navbar">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav id="color-dark">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
            <NavDropdown title="Documentation" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">After 12th</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                After 10th
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                After Graduation
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                see more...
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
     
    
    
    
         </>
  )
}

export default Navbarhead