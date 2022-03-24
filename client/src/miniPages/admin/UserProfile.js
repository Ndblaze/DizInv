import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import GeneralProfile from "../../components/GeneralProfile";
import { useParams, useNavigate } from "react-router-dom";

import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

const override = css`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  position: absolute;
  opacity: 1;
`;

const UserProfile = () => {
  const params = useParams();
  const navigation = useNavigate();
  const [user, setUser] = useState({});
  const [profileType, setProfileType] = useState("");
  const [firstLetter, setFirstLetter] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    setLoading(true);
    await axios
      .get(`http://localhost:5000/api/admin/student-profile/${params.id}`)
      .then((res) => {
        if (res.data.length > 0) {
          // console.log(res.data[0]);
          setUser(res.data[0]);
          setFirstLetter(res.data[0].firstName.slice(0, 1).toUpperCase());
        }
        if (res.data[0].hasOwnProperty("inscription")) { 
          setProfileType("student");
        }
        setLoading(false);
      })  
      .catch((err) => {
        setLoading(false);
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
        {loading && (
          <HashLoader
            color={"#C278F8"}
            css={override}
            loading={loading}
            size={70}
          />
        )}
        <HeaderContainer>
          <BackIcon onClick={() => navigation(-1) } />
          <Hearder>
            {user.firstName}-{user.inscription}
          </Hearder>
        </HeaderContainer>
        <GeneralProfile
          style={{
            opacity: loading && 0.4,
            pointerEvents: loading && "none",
          }}
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
