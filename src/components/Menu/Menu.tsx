import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Menu.scss';

function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#home"><span className="react-logo">⚛️</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#tareas" className="text-white mx-2">Tareas</Nav.Link>
            <Nav.Link href="#metas" className="text-white mx-2">Metas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;