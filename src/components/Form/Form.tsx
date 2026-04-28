import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTaskStore } from '../../store/task.store';
import { useGoalStore } from '../../store/goals.store';
import { useMenuStore } from '../../store/menu.store';
import './Form.scss';

interface FormProps {
  close?: () => void;
}

function FormularioMetas({ close }: FormProps) {
  const { addTask } = useTaskStore();
  const { addGoal } = useGoalStore();
  const { isActive } = useMenuStore();

  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const name = nameRef.current?.value || '';
    const description = descRef.current?.value || '';
    const dueDate = dateRef.current?.value || '';

    if (!name || !description || !dueDate) return;

    const newItem = {
      id: Date.now(),
      name,
      description,
      dueDate
    };

    if (isActive === 'task') {
      addTask(newItem);
    } else {
      addGoal(newItem);
    }

    if (nameRef.current) nameRef.current.value = '';
    if (descRef.current) descRef.current.value = '';
    if (dateRef.current) dateRef.current.value = '';

    if (close) {
      close();
    }
  };

  return (
    <Form className="pt-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-4">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" className="gray-input" ref={nameRef} />
      </Form.Group>
      
      <Form.Group className="mb-4">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} className="gray-input" ref={descRef} /> 
      </Form.Group>
      
      <Form.Group className="mb-5">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" className="gray-input" ref={dateRef} />
      </Form.Group>
      
      <div className="text-center">
        <Button type="submit" className="btn-purple px-5 py-2 w-100 fw-bold">
          ADD {isActive === 'task' ? 'TASK' : 'GOAL'}
        </Button>
      </div>
    </Form>
  );
}

export default FormularioMetas;