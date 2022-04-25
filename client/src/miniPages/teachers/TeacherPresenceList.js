import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import PresenceListTeacher from "../../ComponentsTeacher/PresenceListTeacher";

const TeacherPresenceList = () => {
  const navigation = useNavigate();
  const {group, module, sceance} = useParams();

  console.log(group, module, sceance)


  return (
    <Wrapper>
      <Content>
        <HeaderContainer>
          <BackIcon onClick={() => navigation(-1)} />
          <Hearder>Manage Presence - {group} </Hearder>
        </HeaderContainer>
        <PresenceListTeacher />
      </Content>
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
  // justify-content: space-between;
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

const GroupList = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const Groups = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
