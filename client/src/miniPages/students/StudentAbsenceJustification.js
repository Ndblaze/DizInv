import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import logoImage from "../../asserts/images/logoNav.png";

const StudentAbsenceJustification = () => {
  const [listOption, setListOption] = useState("Absence");

  const List = [
    {
      id_absence: "jjjjj",
      module: "sysytem information",
      date: "2/2/2022",
      time: "12:30:20",
      isJustified: null,
      inscriotion_no: "james eze",
    },
    {
      id_absence: "jjjjqwej",
      module: "sysytem Machine",
      date: "2/8/2022",
      time: "10:30:20",
      isJustified: "Pending",
      inscriotion_no: "james eze",
    },
    {
      id_absence: "wwxww",
      module: "Giene Logiciel",
      date: "21/87/2022",
      time: "15:30:20",
      isJustified: "Accepted",
      inscriotion_no: "james eze",
    },
  ];

  return (
    <Wrapper>
      <Logo to="/student/home">
        <img src={logoImage} />
      </Logo>

      <Content>
        <HeaderContainer>
          <Header>My list of {listOption}</Header>
          <Select onChange={(e) => setListOption(e.target.value)}>
            <option>Absence</option>
            <option>Justification</option>
          </Select>
        </HeaderContainer>
        <AbsenceJustification>
          {List.map((absence) => (
            <Card></Card>
          ))}
        </AbsenceJustification>
      </Content>
    </Wrapper>
  );
};

export default StudentAbsenceJustification;

const Wrapper = styled.div`
  height: 100vh;
  background-color: #f1f3f7;
`;

const Logo = styled(LinkR)`
  position: absolute;
  margin-top: 30px;
  margin-left: 40px;
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: #adb1c0;
  margin-bottom: 30px;
  text-decoration: underline;
`;

const Select = styled.select`
  height: 30px;
  width: 110px;
  padding: 0 5px;
  outline: none;
  border: 1px solid #c278f8;
  border-radius: 5px;
  margin-left: 100px;
`;

const AbsenceJustification = styled.div`
  width: 70%;
  // border: 1px solid red;
  overflow-y: scroll;
  height: 80vh;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #f6e8ff;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #fff;
`;
