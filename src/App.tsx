import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Menu from './components/Menu/Menu';
import FormularioMetas from './components/Form/Form';
import Item from './components/Item/Item';
import AddingMobileButton from './components/AddingMobileButton/AddingMobileButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './store/tasksSlice';
import { fetchGoals } from './store/goalsSlice';
import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<any>();
  
  const tasks = useSelector((state: any) => state.tasks.list);
  const goals = useSelector((state: any) => state.goals.list);
  const isActive = useSelector((state: any) => state.menu.isActive);

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchGoals());
  }, [dispatch]);

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
              {currentList.map((item: any) => (
                <Item key={item._id} item={item} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body className="p-4"><FormularioMetas close={handleCloseModal} /></Modal.Body>
      </Modal>
    </div>
  );
}
export default App;