import React from "react";
import Modal from "react-modal";

import AddNewForm from "./AddNewForm";

const NewUserModal = ({
  isOpen,
  onRequestClose,
  onClick,
  handler,
  storeIn,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#0a0b0d",
      padding: 0,
      border: "none",
      borderRadius: "20px",
      overflow: 'hidden',
      width: "900px",
      height: "650px",
    },
    overlay: {
      backgroundColor: "rgba(10, 11, 13, 0.75)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      <AddNewForm
        onClick={onClick}
        handler={handler}
        storeIn={storeIn}
      />
    </Modal>
  );
};

export default NewUserModal;
