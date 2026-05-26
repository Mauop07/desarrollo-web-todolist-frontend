import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeTaskAsync } from '../../store/tasksSlice';
import { removeGoalAsync } from '../../store/goalsSlice';
import './Item.scss';

interface ItemProps { item: any; }

function Item({ item }: ItemProps) {
  const dispatch = useDispatch<any>();
  const isActive = useSelector((state: any) => state.menu.isActive);

  const handleRemove = () => {
    if (isActive === 'task') {
      dispatch(removeTaskAsync(item._id));
    } else {
      dispatch(removeGoalAsync(item._id));
    }
  };

  let displayDate = null;
  if (item.deadline) {
    displayDate = new Date(item.deadline).toISOString().split('T')[0];
  }

  return (
    <Card className="item-card shadow-sm mb-3">
      <Card.Body className="p-4">
        <p className="fw-bold mb-0">Name</p>
        <p>{item.title}</p> 
        
        <p className="fw-bold mb-0">Description</p>
        <p>{item.description}</p>
        
        {isActive === 'goal' && displayDate && (
          <p className="fw-bold mb-3">Due Date: <span className="fw-normal">{displayDate}</span></p>
        )}
        
        <Button variant="info" className="fw-bold py-2 mt-2" onClick={handleRemove}>
          Remover
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Item;