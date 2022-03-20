import React, { useState } from "react";
import styled from "styled-components";

import { BiUser } from "react-icons/bi";
import GeneralProfile from "../../components/GeneralProfile";

const user = {
  firstName: "Blaze",
  lastName: "Eze",
  email: "ndubuisieze60@gmail.com",
  phone: "+213 798 76 1871",
  address: "UV18 batiment oscar",
  city: "Constantine, nouvelle",
  password: "Blaze@500",
  position: "Administrator",
  faculty: "NTIC",
};

const Profile = () => {
  //data from the add new userEditProfile
  const [newValues, setNewValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    password: "",
  });

  const UpdateValues = (e) => {
    e.preventDefault();
    console.log(newValues);
  };

  return (
    <Wrapper>
      <Content>
        <HeaderContainer>
          <ProfileIcon />
          <Hearder>My Profile</Hearder>
        </HeaderContainer>
        <GeneralProfile
          user={user}
          setNewValues={setNewValues}
          newValues={newValues}
          UpdateValues={UpdateValues}
          profileType="admin"
          firstLetter={user.firstName.slice(0, 1).toUpperCase()}
        />
      </Content>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  padding: 40px 40px 0 0px;
`;

const Content = styled.div`
  //border: 1px solid red;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled(BiUser)`
  color: #777b86;
  font-size: 25px;
  font-weight: 700;
  margin-right: 5px;
`;

const Hearder = styled.h1`
  font-size: 23px;
  font-weight: 700;
  color: #adb1c0;
`;
