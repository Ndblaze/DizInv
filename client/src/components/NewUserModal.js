import React from "react";
import Modal from "react-modal";

import AddNewFormStudentSection from "./AddNewFormStudentSection";
import AddNewFormStudentSpeciality from "./AddNewFormStudentSpeciality";

const NewUserModal = ({
  isOpen,
  onRequestClose,
  setModalIsOpen,
  handler,
  storeIn,
  addedSuccecfully,
  addedFailed
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
      overflow: "hidden",
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
      {handler === "section" && (
        <AddNewFormStudentSection
          setModalIsOpen={setModalIsOpen}
          storeIn={storeIn}
          addedSuccecfully={addedSuccecfully}
          addedFailed={addedFailed}
        />
      )}
      {handler === "speciality" && (
        <AddNewFormStudentSpeciality
          setModalIsOpen={setModalIsOpen}
          storeIn={storeIn}
          addedSuccecfully={addedSuccecfully}
          addedFailed={addedFailed}
        />
      )}
    </Modal>
  );
};

export default NewUserModal;
