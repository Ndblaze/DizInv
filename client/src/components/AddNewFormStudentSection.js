import React from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import image from "../asserts/images/addForm.svg";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import TextFieldOptions from "./TextFieldOptions";

const AddNewFormStudentSection = ({ onClick, storeIn }) => {
  //validation
  const validation = Yup.object({
    firstName: Yup.string()
      .min(3, "field must be more than 3 characters")
      .required("field is required"),
    lastName: Yup.string()
      .min(3, "field must be more than 3 characters")
      .required("field is required"),
    email: Yup.string().email("enter correct email").required("email required"),
    password: Yup.string()
      .min(6, "password must be at least 6 characters")
      .required("field is required"),
    phone: Yup.string("numbers only")
      .required("field is required")
      .min(10, "must be 10 numbers")
      .max(10, "must be 10 numbers"),
    address: Yup.string()
      .min(7, "enter full address")
      .required("field is required"),
    city: Yup.string()
      .min(4, "enter full city name")
      .required("field is required"),
    inscription: Yup.string()
      .min(8, "cannot be less than 8 characters")
      .max(15, "cannot be over 15 characters")
      .required("field is required"),
    department: Yup.string().required("this field is required"),
    section: Yup.string().required("this field is required"),
    level: Yup.string().required("this field is required"),
    group: Yup.string().required("this field is required"),
  });

  //data from the add new modal
  const initialValues = {
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
    department: "",
    group: "",
    storeIn: storeIn,
  };

  const addNewUser = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Hero>
        <Img src={image} alt="add form image" />
      </Hero>
      <Content>
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values) => console.log(values)}
        >
          {(formik) => (
            <div>
              <Header>
                {storeIn} Form
                <CloseIcon onClick={onClick} />
              </Header>
              <Form style={{ width: "95%" }}>
                <Shared>
                  <InputShared>
                    <Label>First name *</Label>
                    <TextField type="text" name="firstName" />
                  </InputShared>
                  <InputShared>
                    <Label>Last name *</Label>
                    <TextField type="text" name="lastName" />
                  </InputShared>
                </Shared>
                <NonShared>
                  <Input>
                    <Label>Email *</Label>
                    <TextField type="email" name="email" />
                  </Input>
                </NonShared>
                <NonShared>
                  <Input>
                    <Label>Address *</Label>
                    <TextField type="text" name="address" />
                  </Input>
                </NonShared>
                <Shared>
                  <InputShared>
                    <Label>City *</Label>
                    <TextField type="text" name="city" />
                  </InputShared>
                  <InputShared>
                    <Label>Phone no *</Label>
                    <TextField type="text" name="phone" />
                  </InputShared>
                </Shared>
                <Shared>
                  <InputShared>
                    <Label>password *</Label>
                    <TextField type="password" name="password" />
                  </InputShared>
                  <InputShared>
                    <Label>Department *</Label>
                    <TextFieldOptions
                      options={[
                        { key: "Choose dept.", value: "" },
                        { key: "Commun Core", value: "Commun Core" },
                      ]}
                      name="department"
                    />
                  </InputShared>
                </Shared>
                <NonShared>
                  <Input>
                    <Label>Inscription no *</Label>
                    <TextField type="text" name="inscription" />
                  </Input>
                </NonShared>
                <Shared>
                  <InputShared3>
                    <Label>Level *</Label>
                    <TextFieldOptions
                      options={[
                        { key: "choose level", value: "" },
                        { key: "Licence 1", value: "Licence 1" },
                        { key: "Licence 2", value: "Licence 2" },
                      ]}
                      name="level"
                    />
                  </InputShared3>
                  <InputShared3>
                    <Label>Section *</Label>
                    <TextFieldOptions
                      options={[
                        { key: "choose section", value: "" },
                        { key: "Section 1", value: "Section 1" },
                        { key: "Section 2", value: "Section 2" },
                        { key: "Section 3", value: "Section 3" },
                        { key: "Section 4", value: "Section 4" },
                      ]}
                      name="section"
                    />
                  </InputShared3>
                  <InputShared3>
                    <Label>Group *</Label>
                    <TextFieldOptions
                      options={[
                        { key: "choose group", value: "" },
                        { key: "G1", value: "G1" },
                        { key: "G2", value: "G2" },
                        { key: "G3", value: "G3" },
                        { key: "G4", value: "G4" },
                      ]}
                      name="group"
                    />
                  </InputShared3>
                </Shared>
                <ButtonContainer>
                  <Save type="submit">Add</Save>
                  <Cancel type="reset" value="Reset" />
                </ButtonContainer>
              </Form>
            </div>
          )}
        </Formik>
      </Content>
    </Wrapper>
  );
};

export default AddNewFormStudentSection;

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
  & > div {
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
