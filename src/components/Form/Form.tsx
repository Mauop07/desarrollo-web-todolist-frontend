import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAsync } from '../../store/tasksSlice';
import { addGoalAsync } from '../../store/goalsSlice';
import './Form.scss';

interface FormProps { close?: () => void; }

function FormularioMetas({ close }: FormProps) {
  const dispatch = useDispatch<any>();
  const isActive = useSelector((state: any) => state.menu.isActive);

  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputTitle = nameRef.current?.value || '';
    const inputDesc = descRef.current?.value || '';
    const inputDate = dateRef.current?.value || '';

    if (!inputTitle || !inputDesc) return;

    if (isActive === 'task') {
      dispatch(addTaskAsync({ title: inputTitle, description: inputDesc }));
    } else {
      dispatch(addGoalAsync({ title: inputTitle, description: inputDesc, deadline: inputDate }));
    }

    if (nameRef.current) nameRef.current.value = '';
    if (descRef.current) descRef.current.value = '';
    if (dateRef.current) dateRef.current.value = '';
    if (close) close();
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
      {isActive === 'goal' && (
        <Form.Group className="mb-5">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" className="gray-input" ref={dateRef} />
        </Form.Group>
      )}
      <div className="text-center mt-4">
        <Button type="submit" className="btn-purple px-5 py-2 w-100 fw-bold">
          ADD {isActive === 'task' ? 'TASK' : 'GOAL'}
        </Button>
      </div>
    </Form>
  );
}
export default FormularioMetas;