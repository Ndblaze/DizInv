import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "../../components/Search";
import { BiMessageSquareAdd, BiMessageSquareEdit } from "react-icons/bi";
import { CgFileRemove } from "react-icons/cg";

import Select from "react-select";

const customStyles = {
  menuList: () => ({
    height: 10,
  }),
  menu: (provided, state) => ({
    ...provided,
    height: "170px",
    overflowY: "scroll",
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: "13px",
  }),
};

const ListNavPresence = ({ getQuery, setDateQuery }) => {
  const [dateList, setDateList] = useState([]);

  useEffect(() => {
    setDateList(dateOptions);
  }, []);

  const dateOptions = [
    {
      value: "01/01/2022",
      label: "01/01/2022",
    },
    {
      value: "02/01/2022",
      label: "02/01/2022",
    },
    {
      value: "03/01/2022",
      label: "03/01/2022",
    },
    {
      value: "04/01/2022",
      label: "04/01/2022",
    },
    {
      value: "05/01/2022",
      label: "05/01/2022",
    },
    {
      value: "06/01/2022",
      label: "06/01/2022",
    },
    {
      value: "07/01/2022",
      label: "07/01/2022",
    },
    {
      value: "08/01/2022",
      label: "08/01/2022",
    },
    {
      value: "09/01/2022",
      label: "09/01/2022",
    },
    {
      value: "10/01/2022",
      label: "10/01/2022",
    },
    {
      value: "11/01/2022",
      label: "11/01/2022",
    },
    {
      value: "12/01/2022",
      label: "12/01/2022",
    },
    {
      value: "13/01/2022",
      label: "13/01/2022",
    },
    {
      value: "14/01/2022",
      label: "14/01/2022",
    },
    {
      value: "15/01/2022",
      label: "15/01/2022",
    },
    {
      value: "16/01/2022",
      label: "16/01/2022",
    },
    {
      value: "17/01/2022",
      label: "17/01/2022",
    },
    {
      value: "18/01/2022",
      label: "18/01/2022",
    },
    {
      value: "19/01/2022",
      label: "19/01/2022",
    },
    {
      value: "20/01/2022",
      label: "20/01/2022",
    },
    {
      value: "21/01/2022",
      label: "21/01/2022",
    },
  ];

  return (
    <Wrapper>
      <SearchContainer>
        <Search onChange={getQuery} />
      </SearchContainer>
      <Operation>
        <div onClick={() => console.log()}>
          <SelectDate
            placeholder="Pick date"
            styles={customStyles}
            name="date"
            options={dateList}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#e5cbff",
                primary: "#bf7fff",
              },
            })}
            onChange={(e) => setDateQuery(e)}
          />
        </div>
        <AddDeleteSceance
          style={{ backgroundColor: "#e5cbff", color: "#bf7fff" }}
        >
          <BiMessageSquareAdd />
        </AddDeleteSceance>
        <AddDeleteSceance
          style={{ backgroundColor: "#d8ffd8", color: "#3bff3b" }}
        >
          <BiMessageSquareEdit />
        </AddDeleteSceance>
        <AddDeleteSceance
          style={{ backgroundColor: "#ffcbe5", color: "#ff7fbf" }}
        >
          <CgFileRemove />
        </AddDeleteSceance>
      </Operation>
    </Wrapper>
  );
};

export default ListNavPresence;

const Wrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border-radius: 20px 20px 0 0;
`;
const SearchContainer = styled.div`
  border: 2px solid #d0d3e0;
  width: 400px;
  height: 30px;
  padding-left: 15px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

const Operation = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AddDeleteSceance = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SelectDate = styled(Select)`
  width: 230px;
`;
