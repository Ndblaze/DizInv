import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TeacherManagePresence = () => {
  const navigation = useNavigate();
  const [manageGroup, setManageGroup] = useState([]);

  console.log(manageGroup);

  useEffect(() => {
    const group = sessionStorage.getItem("groups");
    if (group.includes(",")) {
      setManageGroup(group.split(","));
    } else {
      const arr = [group];
      setManageGroup(arr);
    }
  }, []);

  return (
    <Wrapper>
      <Content>
        <HeaderContainer>
          <BackIcon onClick={() => navigation(-1)} />
          <Hearder>Manage Presence</Hearder>
        </HeaderContainer>
        <GroupList>
          <Hearder>
            {sessionStorage.getItem("sceance").toUpperCase()} -{" "}
            {sessionStorage.getItem("module")}
          </Hearder>
          <Groups>
            {manageGroup.map((group) => (
              <Folder>
                <Hearder>{group}</Hearder>{" "}
              </Folder>
            ))}
          </Groups>
        </GroupList>
      </Content>
    </Wrapper>
  );
};

export default TeacherManagePresence;

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

const Folder = styled.div`
  width: 200px;
  height: 130px;
  margin-top: 50px;
  position: relative;
  border-radius: 0 6px 6px 6px;
  box-shadow: 0 1px 1px #e3beff, 0 2px 4px #e3beff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #c278f8;

  &:hover {
    background-color: #e3beff;
  }

  &::before {
    content: "";
    width: 50%;
    height: 12px;
    border-radius: 0 20px 0 0;
    border-top: 2px solid #c278f8;
    border-left: 2px solid #c278f8;
    position: absolute;
    top: -12px;
    left: 0px;
  }
`;