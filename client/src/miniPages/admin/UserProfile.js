import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import GeneralProfile from "../../components/GeneralProfile";
import { useParams, useLocation } from "react-router-dom";

const UserProfile = () => {
  const params = useParams();
  const location = useLocation();
  const [user, setUser] = useState({});
  const [profileType, setProfileType] = useState("");
  const [firstLetter, setFirstLetter] = useState();

  const setProfile = () => {
    if (location.pathname.includes("licence1" || "licence2")) {
      setProfileType("student");
    }
    if (location.pathname.includes("teacher")) {
      setProfileType("teacher");
    }
  };

  useEffect(() => {
    setProfile();
    getStudents();
  }, []);

  const getStudents = async () => {
    await axios
      .get(`http://localhost:5000/api/admin/students/${params.id}`)
      .then((res) => {
        if (res.data.length > 0) {
          // console.log(res.data[0]);
          setUser(res.data[0]);
          setFirstLetter(res.data[0].firstName.slice(0, 1).toUpperCase());
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //data from the add new userEditProfile
  const [newValues, setNewValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    password: "",
    level: "",
    inscription: "",
    section: "",
    group: "",
    department: "",
  });

  const UpdateValues = (e) => {
    e.preventDefault();
    console.log(newValues);
  };

  return (
    <Wrapper>
      <Content>
        <HeaderContainer>
          <BackIcon />
          <Hearder>
            {user.firstName}-{user.inscription}
          </Hearder>
        </HeaderContainer>
        <GeneralProfile
          user={user}
          setNewValues={setNewValues}
          newValues={newValues}
          UpdateValues={UpdateValues}
          firstLetter={firstLetter}
          profileType={profileType}
        />
      </Content>
    </Wrapper>
  );
};

export default UserProfile;

const Wrapper = styled.div`
  padding: 40px 40px 0 0px;
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
