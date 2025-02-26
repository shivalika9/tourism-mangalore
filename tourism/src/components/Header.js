import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">Namma Kudla</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#blog">Blog</Nav.Link>
        <Nav.Link href="#destinations">Destinations</Nav.Link>
        <Nav.Link href="#guide">Guide</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
