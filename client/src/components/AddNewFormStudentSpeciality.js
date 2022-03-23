import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import image from "../asserts/images/addForm.svg";
import AddFormOptions from "./AddFormOptions";

const AddNewFormStudentSpeciality = ({ onClick, storeIn }) => {

     //data from the add new modal
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    password: "",
    level: "",
    inscription: "",
    speciality: "",
    department: "",
    group: "",
    storeIn: storeIn,
  });

  const newValue = (name, value) => {
    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  };
  const addNewUser = (e) => {
    e.preventDefault();

    console.log(newStudent);
  };

  return (
    <Wrapper>
      <Hero>
        <Img src={image} alt="add form image" />
      </Hero>
      <Content>
        <form>
          <Header>
            {storeIn} Form
            <CloseIcon onClick={onClick} />
          </Header>
          <Shared>
            <InputShared>
              <Label>First name *</Label>
              <input
                type="text"
                onChange={(e) => newValue(e.target.name, e.target.value)}
                name="firstName"
              />
            </InputShared>
            <InputShared>
              <Label>Last name *</Label>
              <input
                type="text"
                onChange={(e) => newValue(e.target.name, e.target.value)}
                name="lastName"
              />
            </InputShared>
          </Shared>
          <NonShared>
            <Input>
              <Label>Email *</Label>
              <input
                type="text"
                onChange={(e) => newValue(e.target.name, e.target.value)}
                name="email"
              />
            </Input>
          </NonShared>
          <NonShared>
            <Input>
              <Label>Address *</Label>
              <input
                type="text"
                onChange={(e) => newValue(e.target.name, e.target.value)}
                name="address"
              />
            </Input>
          </NonShared>
          <Shared>
            <InputShared>
              <Label>City *</Label>
              <input
                type="text"
                onChange={(e) => newValue(e.target.name, e.target.value)}
                name="city"
              />
            </InputShared>
            <InputShared>
              <Label>Phone no *</Label>
              <input
                type="text"
                onChange={(e) => newValue(e.target.name, e.target.value)}
                name="phone"
              />
            </InputShared>
          </Shared>
          <Shared>
            <InputShared>
              <Label>password *</Label>
              <input
                type="text"
                onChange={(e) => newValue(e.target.name, e.target.value)}
                name="password"
              />
            </InputShared>
            <InputShared>
              <Label>Department *</Label>
              <AddFormOptions options={["TLSI", "IFA"]} newValue={newValue} name="department" />
            </InputShared>
          </Shared>
          <NonShared>
            <Input>
              <Label>Inscription no *</Label>
              <input
                type="text"
                onChange={(e) => newValue(e.target.name, e.target.value)}
                name="inscription"
              />
            </Input>
          </NonShared>
          <Shared>
            <InputShared3>
              <Label>Level *</Label>
              <AddFormOptions
                options={["Licence 3", "Master 1", "Master 2"]}
                newValue={newValue}
                name="level"
              />
            </InputShared3>
            <InputShared3>
              <Label>speciality *</Label>
              <AddFormOptions
                options={["GL", "TI", "SCI", "SI", "MWT"]}
                newValue={newValue}
                name="speciality"
              />
            </InputShared3>
            <InputShared3>
              <Label>Group *</Label>
              <AddFormOptions options={["G1", "G2", "G3", "G4"]} newValue={newValue} name="group" />
            </InputShared3>
          </Shared>
          <ButtonContainer>
            <Save type="submit" onClick={(e) => addNewUser(e)}>
              Add
            </Save>
            <Cancel type="reset" value="Reset" />
          </ButtonContainer>
        </form>
      </Content>
    </Wrapper>
  )
}

export default AddNewFormStudentSpeciality

const Wrapper = styled.div`
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Content = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > form {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Hero = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bb60fd;
`;

const Img = styled.img`
  width: 150px;
`;

const Header = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #c278f8;
  border-bottom: 1px solid #f1f3f7;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CloseIcon = styled(MdOutlineClose)`
  color: #0a0b0d;
  font-weight: 700;
  font-size: 25px;
  margin-right: 10px;
`;

const Shared = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin-bottom: 10px;
`;
const NonShared = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 95%;
  margin-bottom: 10px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > input {
    width: 100%;
    border-radius: 3px;
    height: 30px;
    padding-left: 5px;
    outline: none;
    font-size: 14px;
    border: 1px solid #adb1c0;
  }
`;

const InputShared = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  & > input {
    width: 100%;
    border-radius: 3px;
    padding-left: 5px;
    outline: none;
    height: 30px;
    border: 1px solid #adb1c0;
    font-size: 14px;
  }
`;

const InputShared3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;

  & > input {
    width: 96%;
    border-radius: 3px;
    padding-left: 10px;
    outline: none;
    height: 30px;
    border: 1px solid #adb1c0;
    font-size: 14px;
  }
`;

const Label = styled.span`
  color: #777b86;
  margin-left: 3px;
  margin-bottom: 3px;
  font-size: 14px;
  opacity: 0.7;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  height: 50px;
  width: 100%;
  border-top: 1px solid #f1f3f7;
`;

const Save = styled.button`
  height: 30px;
  width: 100px;
  padding: 4px;
  color: #ffffff;
  text-align: center;
  background-color: #a649ea;
  margin-right: 20px;
  margin-left: 30px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
    background-color: #c278f8;
  }
`;
const Cancel = styled.input`
  height: 30px;
  width: 100px;
  padding: 3px;
  color: #adb1c0;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
