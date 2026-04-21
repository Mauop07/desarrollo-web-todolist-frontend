import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Form.scss';

interface FormProps {
  close?: () => void;
}

function FormularioMetas({ close }: FormProps) {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (close) {
      close();
    }
  };

  return (
    <Form className="pt-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-4">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" className="gray-input" />
      </Form.Group>
      
      <Form.Group className="mb-4">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} className="gray-input" /> 
      </Form.Group>
      
      <Form.Group className="mb-5">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" className="gray-input" />
      </Form.Group>
      
      <div className="text-center">
        <Button type="submit" className="btn-purple px-5 py-2 w-100 fw-bold">
          ADD GOAL
        </Button>
      </div>
    </Form>
  );
}

export default FormularioMetas;