import React, { useState } from "react";
import styled from "styled-components";

const MakeJustification = ({ itemToJustify }) => {
  const [studentComment, setStudentComment] = useState("");

  const checkLength = (word) => {
    if (word.trim().length <= 200) {
      setStudentComment(word);
    }
  };

  return (
    <Wrapper>
      <Content>
        <Header> New Justification</Header>
        <form>
          <div>
            <Label>Module</Label>
            <InputNotShared defaultValue={"Module"} readOnly />
          </div>
          <div>
            <Label>Sceance</Label>
            <InputNotShared defaultValue={"Sceance"} readOnly />
          </div>
          <div>
            <Label>Level</Label>
            <InputNotShared defaultValue={"Level"} readOnly />
          </div>
          <div>
            <Label>Drop a comment ({200 - studentComment.trim().length})</Label>
            <Textarea
              rows="4"
              cols="50"
              onChange={(e) => checkLength(e.target.value)}
              value={studentComment}
            />
          </div>
          <div>
            <Label>Attachment (recomended)</Label>
            <InputNotShared style={{ border: "none" }} type={"file"} />
          </div>
          <AddSceance>Submit</AddSceance>
        </form>
      </Content>
    </Wrapper>
  );
};

export default MakeJustification;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;

  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // border: 1px solid red;

  & > form {
    width: 85%;
    height: 85%;
    // border: 1px solid red;
  }
`;

const Header = styled.h1`
  font-size: 25px;
  color: #bf7fff;
  margin-bottom: 20px;
  margin-top: 10px;
  text-decoration: underline;
`;

const Label = styled.h1`
  font-size: 16px;
  color: #c4c4c4;
  margin-bottom: 5px;
`;

const InputNotShared = styled.input`
  outline: none;
  width: 98%;
  height: 30px;
  border: 1px solid #c4c4c4;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 14px;
  padding-left: 5px;
`;

const Textarea = styled.textarea`
  outline: none;
  width: 97%;
  border: 1px solid #c4c4c4;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px;
  resize: none;
`;

const AddSceance = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  padding: 0 10px;
  margin-top: 10px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  background-color: #c183ff;

  &:hover {
    background-color: #e5cbff;
    color: #bf7fff;
  }
`;
