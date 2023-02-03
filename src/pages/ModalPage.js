import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        OK
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Modal Content!
    </Modal>
  );

  return (
    <div>
      <Button primary rounded onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
