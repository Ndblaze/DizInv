import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import QRGenerator from "./QRGenerator";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

const override = css`
  position: absolute;
  opacity: 1;
`;

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
    height: "500px",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};

const CreateNewSession = ({ modalIsOpen, setModalIsOpen, createNewSession }) => {
  //parameters from URL link
  const { group, module, sceance } = useParams();

  //loading animation
  const [loading, setLoading] = useState(false);

  const [sessionDetails, setSessionDetails] = useState({});

  //get the time stamp
  const getCurrentTimeStamp = () => {
    const today = new Date();
    return (
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    );
  };

  useEffect(() => {
    setSessionDetails({
      SessionID: uuidv4(),
      module: module,
      group: group,
      sceance: sceance,
      level: sessionStorage.getItem("level"),
      department: sessionStorage.getItem("department"),
      date: new Date().toLocaleDateString(),
      timeStamp: getCurrentTimeStamp(),
    });
  }, []);


  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={() => setModalIsOpen(false)}
      ariaHideApp={false}
    >
      <Wrapper>
        <Content>
          <LeftForm>
            <Header>Create new session</Header>
            <form>
              <div>
                <Label>Session ID</Label>
                <InputNotShared
                  defaultValue={sessionDetails.SessionID}
                  readOnly
                />
              </div>
              <div>
                <Label>Module name</Label>
                <InputNotShared defaultValue={sessionDetails.module} readOnly />
              </div>
              <SharedForm>
                <div>
                  <Label>Group</Label>
                  <InputShared defaultValue={sessionDetails.group} readOnly />
                </div>
                <div>
                  <Label>Sceance</Label>
                  <InputShared defaultValue={sessionDetails.sceance} readOnly />
                </div>
              </SharedForm>
              <SharedForm>
                <div>
                  <Label>Level</Label>
                  <InputShared defaultValue={sessionDetails.level} readOnly />
                </div>
                <div>
                  <Label>Date</Label>
                  <InputShared defaultValue={sessionDetails.date} readOnly />
                </div>
              </SharedForm>

              <CreateButtonContainer>
                <AddSceance
                  onClick={() => createNewSession(sessionDetails)}
                  style={{ color: "#bf7fff", backgroundColor: "#e5cbff" }}
                >
                  Manually
                </AddSceance>
                <AddSceance
                  onClick={() => console.log(JSON.stringify(sessionDetails))}
                  style={{
                    color: "#00cf00",
                    backgroundColor: "#e2ffe2",
                    width: "170px",
                  }}
                >
                  Use IOT (recomended)
                </AddSceance>
              </CreateButtonContainer>
            </form>
          </LeftForm>
          <Right>
            {loading ? (
              <HashLoader
                color={"#C278F8"}
                css={override}
                loading={loading}
                size={100}
              />
            ) : (
              <QRGenerator text={JSON.stringify(sessionDetails)} />
            )}
          </Right>
        </Content>
      </Wrapper>
    </Modal>
  );
};

export default CreateNewSession;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftForm = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //  border: 1px solid red;
`;

const Header = styled.h1`
  font-size: 20px;
  color: #bf7fff;
  margin-bottom: 20px;
`;

const Label = styled.h1`
  font-size: 16px;
  color: #c4c4c4;
  margin-bottom: 5px;
`;

const InputNotShared = styled.input`
  outline: none;
  width: 100%;
  height: 35px;
  border: 1px solid #c4c4c4;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 14px;
  padding-left: 5px;
`;

const SharedForm = styled.div`
  width: 102%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputShared = styled.input`
  outline: none;
  width: 95%;
  height: 35px;
  border: 1px solid #c4c4c4;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 14px;
  padding-left: 5px;
`;

const CreateButtonContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  background-color: #f2e5ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddSceance = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f2e5ff;
  }
`;
