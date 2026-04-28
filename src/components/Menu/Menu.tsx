import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useMenuStore } from '../../store/menu.store';
import './Menu.scss';

function Menu() {
  const { isActive, setActive } = useMenuStore();

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="shadow-sm navbar">
      <Container fluid>
        <Navbar.Brand href="#home"><span className="react-logo">⚛️</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav 
            className="me-auto" 
            activeKey={isActive} 
            onSelect={(selectedKey) => selectedKey && setActive(selectedKey)}
          >
            <Nav.Link eventKey="task" className="text-white mx-2">Tareas</Nav.Link>
            <Nav.Link eventKey="goal" className="text-white mx-2">Metas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;