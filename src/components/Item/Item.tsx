import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useTaskStore } from '../../store/task.store';
import { useGoalStore } from '../../store/goals.store';
import { useMenuStore } from '../../store/menu.store';
import './Item.scss';

interface ItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    dueDate: string;
  }
}

function Item({ item }: ItemProps) {
  const { removeTask } = useTaskStore();
  const { removeGoal } = useGoalStore();
  const { isActive } = useMenuStore();

  const handleRemove = () => {
    if (isActive === 'task') {
      removeTask(item.id);
    } else {
      removeGoal(item.id);
    }
  };

  return (
    <Card className="item-card shadow-sm">
      <Card.Body className="p-4">
        <p className="fw-bold mb-0">Name</p>
        <p>{item.name}</p>
        
        <p className="fw-bold mb-0">Description</p>
        <p>{item.description}</p>
        
        <p className="fw-bold mb-3">
          Due Date: <span className="fw-normal">{item.dueDate}</span>
        </p>
        
        <Button variant="info" className="fw-bold py-2" onClick={handleRemove}>
          Remover
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;