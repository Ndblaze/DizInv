import React, { useState } from "react";
import styled from "styled-components";

const AddFormOptions = ({ options, newValue }) => {
  const dropDownOptions = () => {
    if (options === "department") {
      return ["Commun core", "TLSI", "IFA"];
    }
    if (options === "section") {
      return ["Section 1", "Section 2", "Section 3", "Section 4"];
    }
    if (options === "group") {
      return ["G1", "G2", "G3", "G4"];
    }
    if (options === "level") {
      return ["Licence 1", "Licence 2", "Licence 3", "Master 1", "Master 2"];
    }
    if (options === "speciality") {
      return ["GL", "SCI", "TI", "SI", "MTW"];
    }
  };

  return (
    <>
      <Select
        name={options}
        onChange={(e) => newValue(e.target.name, e.target.value)}
      >
        <Option value=""></Option>
        {dropDownOptions().map((value) => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Select>
    </>
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
