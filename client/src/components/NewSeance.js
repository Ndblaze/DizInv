import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

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
    width: "450px",
    height: "250px",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};

const NewSeance = ({
  isOpen,
  close,
  initial,
  setInitial,
  editSceance,
  addSceance,
}) => {
  const updateInitial = (name, value) => {
    setInitial({
      ...initial,
      [name]: value,
    });

    console.log(initial);
  };

  return (
    <Modal isOpen={isOpen} style={customStyles} ariaHideApp={false}>
      <Wrapper>
        <form>
          <Header>Add Edit Delete sceance</Header>
          <Inputs
            placeholder="enter matiere ...."
            defaultValue={initial.module}
            onChange={(e) => updateInitial(e.target.name, e.target.value)}
            name="module"
          />
          <Inputs
            placeholder="enter room ...."
            defaultValue={initial.room}
            onChange={(e) => updateInitial(e.target.name, e.target.value)}
            name="room"
          />
          <ButtonContainers>
            <Buttons onClick={(e) => addSceance(e)}>Add</Buttons>
            <Buttons onClick={(e) => editSceance(e)}>Edit</Buttons>
            <Buttons>Delete</Buttons>
            <Buttons onClick={close}>Cancel</Buttons>
          </ButtonContainers>
        </form>
      </Wrapper>
    </Modal>
  );
};

export default NewSeance;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  & > form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const Header = styled.h1`
  font-size: 18px;
  text-align: center;
`;

const Inputs = styled.input`
  width: 80%;
  height: 35px;
  padding-left: 10px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #000;
`;

const ButtonContainers = styled.div``;

const Buttons = styled.button`
  cursor: pointer;
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  margin-left: 20px;
  background-color: #f56396;
  color: #fff;
  font-weight: 500;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
    background-color: #fff;
    color: #8f8f8f;
  }
`;
