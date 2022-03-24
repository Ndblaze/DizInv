import React from "react";
import styled from "styled-components";
const Form = ({ user, setNewValues, newValues, UpdateValues, profileType }) => {

  const getValue = (name, value) => {
    setNewValues({
      ...newValues,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <Content>
        <form>
          <Shared>
            <InputShared>
              <Label>first name</Label>
              <input
                type="text"
                placeholder={user.firstName}
                onChange={(e) => getValue(e.target.name, e.target.value)}
                name="firstName"
              />
            </InputShared>
            <InputShared>
              <Label>Last name</Label>
              <input
                type="text"
                placeholder={user.lastName}
                onChange={(e) => getValue(e.target.name, e.target.value)}
                name="lastName"
              />
            </InputShared>
          </Shared>
          <NonShared>
            <Input>
              <Label>Email</Label>
              <input
                type="text"
                placeholder={user.email}
                onChange={(e) => getValue(e.target.name, e.target.value)}
                name="email"
              />
            </Input>
          </NonShared>
          <NonShared>
            <Input>
              <Label>Address</Label>
              <input
                type="text"
                placeholder={user.address}
                onChange={(e) => getValue(e.target.name, e.target.value)}
                name="address"
              />
            </Input>
          </NonShared>
          <NonShared>
            <Input>
              <Label>City</Label>
              <input
                type="text"
                placeholder={user.city}
                onChange={(e) => getValue(e.target.name, e.target.value)}
                name="city"
              />
            </Input>
          </NonShared>
          <Shared>
            <InputShared>
              <Label>Password</Label>
              <input
                type="text"
                placeholder={user.password}
                onChange={(e) => getValue(e.target.name, e.target.value)}
                name="password"
              />
            </InputShared>
            <InputShared>
              <Label>Phone</Label>
              <input
                type="text"
                placeholder={user.phone}
                onChange={(e) => getValue(e.target.name, e.target.value)}
                name="phone"
              />
            </InputShared>
          </Shared>
          {profileType === "admin" && (
            <Shared>
              <InputShared>
                <Label>Position</Label>
                <input type="text" defaultValue={user.position} />
              </InputShared>
              <InputShared>
                <Label>Faculty</Label>
                <input type="text" defaultValue={user.faculty} />
              </InputShared>
            </Shared>
          )}
          {profileType === "student" && (
            <>
              <Shared>
                <InputShared>
                  <Label>Inscrption No *</Label>
                  <input
                    type="text"
                    placeholder={user.inscription}
                    onChange={(e) => getValue(e.target.name, e.target.value)}
                    name="inscription"
                  />
                </InputShared>
                <InputShared>
                  <Label>Department *</Label>
                  <input
                    type="text"
                    placeholder={user.department}
                    onChange={(e) => getValue(e.target.name, e.target.value)}
                    name="department"
                  />
                </InputShared>
              </Shared>
              <Shared>
                <InputShared3>
                  <Label>Level *</Label>
                  <input
                    type="text"
                    placeholder={user.level}
                    onChange={(e) => getValue(e.target.name, e.target.value)}
                    name="level"
                  />
                </InputShared3>
                <InputShared3>
                  <Label>Section *</Label>
                  {user.hasOwnProperty('section') && <input
                    type="text"
                    placeholder={user.section}
                    onChange={(e) => getValue(e.target.name, e.target.value)}
                    name="section"
                  />}
                  {user.hasOwnProperty('speciality') && <input
                    type="text"
                    placeholder={user.speciality}
                    onChange={(e) => getValue(e.target.name, e.target.value)}
                    name="section"
                  />}
                </InputShared3>
                <InputShared3>
                  <Label>Group *</Label>
                  <input
                    type="text"
                    placeholder={user.group}
                    onChange={(e) => getValue(e.target.name, e.target.value)}
                    name="group"
                  />
                </InputShared3>
              </Shared>
            </>
          )}
          <ButtonContainer>
            <Save onClick={UpdateValues}>Save</Save>
            <Cancel>Cancel</Cancel>
          </ButtonContainer>
        </form>
      </Content>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  width: 50%;
  height: fit-content;
  background-color: #ffffff;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 20px;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 20px;

  & > form {
    //  border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

const InputShared3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;

  & > input {
    width: 90%;
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
  font-size: 12px;
  opacity: 0.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -20px;
  margin-top: 20px;
  padding-left: 100px;
  height: 100px;
  width: 110%;
  background-color: #f1f3f7;
`;

const Save = styled.button`
  height: 40px;
  width: 120px;
  padding: 8px;
  color: #ffffff;
  text-align: center;
  background-color: #a649ea;
  margin-right: 20px;
  border-radius: 10px;
  border: none;
  font-size: 22px;
  font-weight: 500;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
    background-color: #c278f8;
  }
`;
const Cancel = styled.button`
  height: 40px;
  width: 120px;
  padding: 8px;
  color: #adb1c0;
  text-align: center;
  background-color: #ffffff;
  margin-right: 20px;
  border-radius: 10px;
  border: none;
  font-size: 22px;
  font-weight: 500;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.22);

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
