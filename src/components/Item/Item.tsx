import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Item.scss';

function Item() {
  return (
    <Card className="item-card shadow-sm">
      <Card.Body className="p-4">
        <p className="fw-bold mb-0">Name</p>
        <p>Proyecto de Curso de desarrollo web</p>
        
        <p className="fw-bold mb-0">Description</p>
        <p>Elaborar una aplicación web responsive en la que se pueda llevar control de mis metas y tareas personales.</p>
        
        <p className="fw-bold mb-3">
          Due Date: <span className="fw-normal">31/05/2024</span>
        </p>
        
        <Button variant="info" className="fw-bold py-2">Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;