import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Menu from './components/Menu/Menu';
import FormularioMetas from './components/Form/Form';
import Item from './components/Item/Item';
import AddingMobileButton from './components/AddingMobileButton/AddingMobileButton';
import { useTaskStore } from './store/task.store';
import { useGoalStore } from './store/goals.store';
import { useMenuStore } from './store/menu.store';
import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(false);
  
  const { tasks } = useTaskStore();
  const { goals } = useGoalStore();
  const { isActive } = useMenuStore();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const currentList = isActive === 'task' ? tasks : goals;

  return (
    <div className="app-container">
      <Menu />

      <Container fluid className="mt-4 px-4 px-md-5">
        <Row>
          <Col md={5} className="pe-md-5 mb-4 d-none d-md-block">
            <div className="pt-4">
              <FormularioMetas />
            </div>
          </Col>

          <Col xs={12} md={7}>
            <AddingMobileButton onOpenModal={handleOpenModal} />

            <div className="scrollable-list">
              {currentList.map(item => (
                <Item key={item.id} item={item} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body className="p-4 rounded-3">
          <FormularioMetas close={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;