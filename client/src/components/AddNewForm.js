import React from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md"; 

const AddNewForm = ({ onClick, handler, setNewStudent, newStudent}) => {
    
    const newValue = (name,value) => {
        setNewStudent({
            ...newStudent,
            [name]: value,
        })
        console.log(newStudent)
    }
  return (
    <Wrapper>
      <Content>
        <form>
          <Header>
            Licence 1 form
            <CloseIcon onClick={onClick} />
          </Header>
          <Shared>
            <InputShared>
              <Label>First name *</Label>
              <input type="text" onChange={(e) => newValue(e.target.name, e.target.value)} name="firstName"/>
            </InputShared>
            <InputShared>
              <Label>Last name *</Label>
              <input type="text" onChange={(e) => newValue(e.target.name, e.target.value)} name="LastName"/>
            </InputShared>
          </Shared>
          <NonShared>
            <Input>
              <Label>Email *</Label>
              <input type="text" onChange={(e) => newValue(e.target.name, e.target.value)} name="email"/>
            </Input>
          </NonShared>
          <NonShared>
            <Input>
              <Label>Address *</Label>
              <input type="text" onChange={(e) => newValue(e.target.name, e.target.value)} name="address"/>
            </Input>
          </NonShared>
          <Shared>
            <InputShared>
              <Label>City *</Label>
              <input type="text" onChange={(e) => newValue(e.target.name, e.target.value)} name="city"/>
            </InputShared>
            <InputShared>
              <Label>Phone no *</Label>
              <input type="text" onChange={(e) => newValue(e.target.name, e.target.value)} name="phone"/>
            </InputShared>
          </Shared>
          <Shared>
            <InputShared>
              <Label>password *</Label>
              <input type="text" onChange={(e) => newValue(e.target.name, e.target.value)} name="password"/>
            </InputShared>
            <InputShared>
              <Label>Level *</Label>
              <input type="text" onChange={(e) => newValue(e.target.name, e.target.value)} name="level"/>
            </InputShared>
          </Shared>
          <NonShared>
            <Input>
              <Label>Inscription no *</Label>
              <input type="text" onChange={(e) => newValue(e.target.name, e.target.value)} name="inscription"/>
            </Input>
          </NonShared>
          <Shared>
            {handler === "section" ? (
              <InputShared>
                <Label>Section *</Label>
                <input type="text" onChange={(e) => newValue(e.target.name, e.target.value)} name="section"/>
              </InputShared>
            ) : (
              <InputShared>
                <Label>Speciality *</Label>
                <input type="text" onChange={(e) => newValue(e.target.name, e.target.value)} name="speciality"/>
              </InputShared>
            )}
            <InputShared>
              <Label>Group *</Label>
              <input type="text" onChange={(e) => newValue(e.target.name, e.target.value)} name="group"/>
            </InputShared>
          </Shared>
          <ButtonContainer>
            <Save >Add</Save>
            <Cancel type="reset" value="Reset" />
          </ButtonContainer>
        </form>
      </Content>
    </Wrapper>
  );
};

export default AddNewForm;

const Wrapper = styled.div`
  height: fit-content;
  background-color: #ffffff;
  //box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Content = styled.div`
  padding: 0px 20px;

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Header = styled.div`
  font-size: 22px;
  font-weight: 700;
  padding: 10px 10px;
  color: #c278f8;
  border-bottom: 1px solid #f1f3f7;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: 10px;
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
  width: 91%;
  margin-bottom: 10px;
`;
const NonShared = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 10px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;

  & > input {
    width: 100%;
    border-radius: 10px;
    height: 30px;
    padding-left: 10px;
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
    width: 93%;
    border-radius: 10px;
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
  margin-top: 10px;
  height: 70px;
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
