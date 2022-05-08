import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import PresenceListTeacher from "../../ComponentsTeacher/PresenceListTeacher";
import CreateNewSession from "./CreateNewSession";

const TeacherPresenceList = () => {
  const navigation = useNavigate();
  const { group, module } = useParams();

  //seting the add session modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  console.log(group, module);

  return (
    <Wrapper>
      <Content>
        <HeaderContainer>
          <Title>
            <BackIcon onClick={() => navigation(-1)} />
            <Hearder>Manage Presence - {group} </Hearder>
          </Title>
          <AddSceance onClick={() => setModalIsOpen(true)}>
            New Session
            <BiMessageSquareAdd />
          </AddSceance>
        </HeaderContainer>
        <PresenceListTeacher />
      </Content>
      <CreateNewSession modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </Wrapper>
  );
};

export default TeacherPresenceList;

const Wrapper = styled.div`
  padding: 40px 40px 0 0px;
  width: 100%;
`;

const Content = styled.div`
  //border: 1px solid red;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
`;

const BackIcon = styled(FaArrowLeft)`
  color: #777b86;
  font-size: 23px;
  font-weight: 700;
  margin-right: 40px;
  cursor: pointer;
`;

const Hearder = styled.h1`
  font-size: 23px;
  font-weight: 700;
  color: #adb1c0;
`;

const AddSceance = styled.div`
  width: 130px;
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  margin-right: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: #e5cbff;
  color: #bf7fff;

  &:hover {
    background-color: #f2e5ff;
  }
`;
