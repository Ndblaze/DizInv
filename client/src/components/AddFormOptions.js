import React from "react";
import styled from "styled-components";

const AddFormOptions = ({ options, newValue, name }) => {
  const changes = (e) => {
    newValue(e.target.name, e.target.value);
  };

  return (
    <Select name={name} onChange={(e) => changes(e)}>
      <Option value="">choose {name}</Option>
      {options.map((option) => (
           <Option value={option}>{option}</Option>
      ))}
    </Select>
  );
};

export default AddFormOptions;

const Select = styled.select`
  height: 30px;
  font-size: 14px;
  padding: 0px 5px;
  outline: none;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #adb1c0;
`;
const Option = styled.option`
  font-size: 16px;
  width: 100%;
  background-color: #adb1c0;
  border: none;
`;
