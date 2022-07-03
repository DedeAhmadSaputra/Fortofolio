import React from 'react'
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';

function Baar() {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Dede Ahmad Saputra</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title="Main Menu" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#about">About</NavDropdown.Item>
        <NavDropdown.Item href="#portofolio">Fortofolio</NavDropdown.Item>
        <NavDropdown.Item href="#service">Service</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
  )
}




export default Baar;