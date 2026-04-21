import React from 'react';
import { Button } from 'react-bootstrap';
import './AddingMobileButton.scss';

interface Props {
  onOpenModal: () => void;
}

function AddingMobileButton({ onOpenModal }: Props) {
  return (
    <div className="d-md-none">
      <Button 
        className="floating-btn px-4 py-2 fw-bold shadow-sm" 
        onClick={onOpenModal}
      >
        ADD GOAL
      </Button>
    </div>
  );
}

export default AddingMobileButton;