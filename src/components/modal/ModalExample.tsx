import { useState } from 'react';
import Modal from './Modal';

const MyModalBody = () => (
  <>
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iste.</p>
  </>
);

const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'white',
        textAlign: 'center',
        paddingTop: '2rem',
      }}
    >
      <button onClick={toggleModal}>Open Modal</button>
      {showModal && (
        <Modal
          onClose={toggleModal}
          id='custom-id'
          header='This is my custom header'
          body={<MyModalBody />}
        />
      )}
    </div>
  );
};
export default ModalExample;
