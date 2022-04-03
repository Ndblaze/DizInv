import React, { useState } from "react";
import styled from "styled-components";
import Search from "../../components/Search";

//react icons
import { MdNotificationsActive } from "react-icons/md";
import ProfileLogo from "../../components/ProfileLogo";

const TeacherNav = () => {
    const [query, setQuery] = useState("");
  return (
    <Wrapper>
      <Content>
        <SearchContainer>
          <Search 
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </SearchContainer>
        <Notification />
        <Profile>
          <ProfileLogo Text="B" Name="Blaze" />
        </Profile>
      </Content>
    </Wrapper>
  )
}

export default TeacherNav



const Wrapper = styled.div`
  padding: 20px 40px 0 0px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  flex: 1;
  background-color: #d0d3e0;
  height: 40px;
  padding-left: 15px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

const Notification = styled(MdNotificationsActive)`
  color: #777b86;
  font-size: 25px;
  margin-left: 50px;
`;

const Profile = styled.div``;
