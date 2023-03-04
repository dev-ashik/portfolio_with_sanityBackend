import React from "react";
import Modal from "react-modal";

import "./ReactModal.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: '1px solid #313bac'
  },
  overlay: { zIndex: 1000 },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export const ReactModal = ({ modalIsOpen, setIsOpen, content }) => {
  const { name, message, image } = content;

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        appElement={document.getElementById('root') || undefined}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal_content">
          <div className="clsoseButton">
            <button onClick={closeModal}>x</button>
          </div>
          <h3>{name}</h3>
          <img src={image} alt="qr_code" />
          <p>{message}</p>
        </div>
      </Modal>
    </>
  );
};
